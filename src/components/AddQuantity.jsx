import { Divider } from '@nextui-org/react';
import { useAuthContext } from '../context/AuthContext';
import RationItemInputs from '../sub_components/RationItemInputs';
import useCalculateMaxQuantity from '../custom_hooks/useCalculateMaxQuantity';

const AddQuantity = ({ rationInputValues, setRationInputValues, totalQuantity, setTotalQuantity }) => {
    const { accountDetails } = useAuthContext();
    const { maxQuantity } = useCalculateMaxQuantity();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setRationInputValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        const allInputs = document.querySelectorAll("input[type='number']");
        let total = 0;

        allInputs.forEach((input) => {
            total += parseFloat(input.value) || 0;
        });

        setTotalQuantity(total);
    };

    return (
        <>
            <div className="w-full col-span-2 border py-6 px-10 bg-white rounded-md max-h-max">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">RFID: {accountDetails?.RFID}</h1>
                        <div className="flex flex-col gap-2 items-end">
                            <h4 className="text-[15px]">
                                Max Quantity:
                                <span className="ml-1.5 tracking-wide font-medium">
                                    {maxQuantity}kg
                                </span>
                            </h4>

                            <h4 className="text-[15px]">
                                Total Quantity:
                                <span className="ml-1.5 tracking-wide font-medium">
                                    {totalQuantity}kg
                                </span>
                            </h4>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-3">
                        <h2 className="text-base font-medium">Select Quantity:</h2>

                        <div className="flex items-center justify-between flex-wrap gap-10">
                            <RationItemInputs
                                rationInputValues={rationInputValues} 
                                accountDetails={accountDetails}
                                totalQuantity={totalQuantity}
                                maxQuantity={maxQuantity}
                                handleInputChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddQuantity;