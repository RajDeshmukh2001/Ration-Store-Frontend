import { Divider } from '@nextui-org/react';
import { useAuthContext } from '../context/AuthContext';
import { useGetDataContext } from '../context/GetDataContext';

const OrderTable = ({ rationInputValues, totalQuantity }) => {
    const { rationItems } = useGetDataContext();
    const { accountDetails } = useAuthContext();

    const filterItems = rationItems?.filter((item) => {
        const allowedItems = ['Wheat', 'Rice', 'Sugar'];

        if (accountDetails?.rationCardType === 'Priority Household' || accountDetails?.rationCardType === 'Above Poverty Line') {
            return allowedItems.includes(item.itemname);
        } else {
            return item;
        }
    });

    const getPriceKey = (rationCardType) => rationCardType.replace(/\s+/g, "_");
    let totalPrice = 0;

    return (
        <>
            <table className="w-full border-collapse table-auto th-td-padding">
                <thead>
                    <tr className="text-base">
                        <th className="text-start font-semibold">Item</th>
                        <th className="font-semibold">Total Qty</th>
                        <th className="text-end font-semibold">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filterItems?.map((item) => {
                        const quantity = rationInputValues[item.itemname.concat('Quantity')] || 0;
                        const pricePerKg = item.prices[getPriceKey(accountDetails?.rationCardType)] || 0;
                        const itemTotal = quantity * pricePerKg;

                        totalPrice += itemTotal;

                        return (
                            <tr key={item._id}>
                                <td>{item.itemname}</td>
                                <td className="text-center">{quantity} kg</td>
                                <td className="text-end">₹{itemTotal}</td>
                            </tr>
                        );
                    })}

                    <tr>
                        <td><Divider /></td>
                        <td><Divider /></td>
                        <td><Divider /></td>
                    </tr>

                    <tr>
                        <td>Total</td>
                        <td className="text-center">{totalQuantity} kg</td>
                        <td className="text-end">₹ {totalPrice}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default OrderTable;