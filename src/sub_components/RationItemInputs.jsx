import React from 'react'
import { useGetDataContext } from '../context/GetDataContext';

const RationItemInputs = ({ rationInputValues, accountDetails, totalQuantity, maxQuantity, handleInputChange }) => {
    const { rationItems } = useGetDataContext();

    const getPriceKey = (rationCardType) => rationCardType.replace(/\s+/g, "_");

    const filterItems = rationItems?.filter((item) => {
        const allowedItems = ['Wheat', 'Rice', 'Sugar'];

        if (accountDetails?.rationCardType === 'Priority Household' || accountDetails?.rationCardType === 'Above Poverty Line') {
            return allowedItems.includes(item.itemname);
        } else {
            return item;
        }
    });

    return (
        <>
            {
                filterItems?.map((item) => (
                    <div key={item._id} className="min-w-32 flex flex-col">
                        <label htmlFor={item.itemname} className="flex items-center justify-between capitalize text-gray-700 text-[15px]">
                            {item.itemname}
                            <span className="text-[13px] tracking-wide text-gray-500">
                                ₹{item.prices[getPriceKey(accountDetails?.rationCardType)]}/kg
                            </span>
                        </label>
                        <input
                            id={item.itemname}
                            type="number"
                            min={0}
                            max={maxQuantity - totalQuantity + (rationInputValues[`${item.itemname}Quantity`] || 0)}
                            defaultValue={0}
                            name={`${item.itemname}Quantity`}
                            onChange={handleInputChange}
                            className="mt-2 rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 md:text-[15px]"
                        />
                    </div>
                ))
            }
        </>
    )
}

export default RationItemInputs;