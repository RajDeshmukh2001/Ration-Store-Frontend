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
            <div className="w-full md:col-span-2 border p-5 md:py-6 md:px-10 bg-white rounded-md max-h-max">

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                        <h1 className="text-base md:text-xl font-semibold">RFID: {accountDetails?.RFID}</h1>

                        <div className="flex flex-col gap-1.5 md:gap-2 md:items-end">
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
                        <h2 className="text-[15px] md:text-base font-medium">Select Quantity:</h2>

                        <div className="flex items-center justify-between flex-wrap gap-y-8 md:gap-10">
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