import axios from 'axios';
import { toast } from 'sonner';
import { Divider } from "@nextui-org/divider";
import { useNavigate } from 'react-router-dom';
import OrderTable from "../sub_components/OrderTable";
import { useAuthContext } from "../context/AuthContext";
import { useGetDataContext } from '../context/GetDataContext';
import useCalculateMaxQuantity from "../custom_hooks/useCalculateMaxQuantity";

const PlaceOrder = ({ rationInputValues, totalQuantity }) => {
    const { rationItems, getUserOrders, getAllOrders } = useGetDataContext();
    const { accountDetails } = useAuthContext();
    const { maxQuantity } = useCalculateMaxQuantity();

    const navigate = useNavigate();

    const handlePlaceOrder = async () => {
        if (totalQuantity === 0) {
            toast.error("Please enter valid quantities");
            return;
        }

        const orderData = {
            customer: {
                userId: accountDetails?._id,
                RFID: accountDetails?.RFID,
                rationCardType: accountDetails?.rationCardType,
                totalFamilyMembers: accountDetails?.familyMembers,
            },
            maxQuantity,
            totalQuantity,
            totalPrice: calculateTotalPrice(),
            orderItems: prepareOrderItems(),
        };

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/order/place_order`, orderData);
            
            if (res.status === 201) {
                toast.success(res.data.message);
                getUserOrders();
                getAllOrders();
                navigate('/my_orders');
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    };

    const prepareOrderItems = () => {
        return Object.keys(rationInputValues).map((key) => {
            if (key.endsWith("Quantity")) {
                const itemName = key.replace("Quantity", "");
                const itemPrice = accountDetails
                    ? rationItems.find((item) => item.itemname === itemName)?.prices[
                    accountDetails.rationCardType.replace(/\s+/g, "_")
                    ]
                    : 0;
                return {
                    item: itemName,
                    itemPrice,
                    itemTotalQuantity: Number(rationInputValues[key]),
                    itemTotalPrice: itemPrice * rationInputValues[key],
                };
            }
            return null;
        }).filter(Boolean);
    };

    const calculateTotalPrice = () => {
        return prepareOrderItems().reduce((total, item) => total + item.itemTotalPrice, 0);
    };


    return (
        <div className="flex flex-col gap-5 border md:col-span-1 p-5 md:py-6 md:px-10 bg-white rounded-md">
            <div className="flex flex-col gap-3">
                <div className="flex items-center md:justify-between gap-x-5 md:gap-0">
                    <p className="text-[15px] text-gray-800">Ration Card:</p>
                    <p className="text-[15px] font-medium">{accountDetails?.rationCardType}</p>
                </div>
                <div className="flex items-center md:justify-between gap-x-5 md:gap-0">
                    <p className="text-[15px] text-gray-800">Total Family Members:</p>
                    <p className="text-[15px] font-medium">{accountDetails?.familyMembers}</p>
                </div>
            </div>
            <Divider />

            <OrderTable rationInputValues={rationInputValues} totalQuantity={totalQuantity} />

            <button
                onClick={handlePlaceOrder}
                className="rounded-md px-3 py-1.5 font-medium bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-primary transition duration-500 ease-in-out"
            >
                Place Order
            </button>
        </div>
    )
}

export default PlaceOrder;