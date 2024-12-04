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
            toast.error("Please ensure you have selected quantities.");
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
            toast.error(error);
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
                    itemTotalQuantity: rationInputValues[key],
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
        <div className="col-span-1 flex flex-col gap-5 border py-6 px-10 bg-white rounded-md">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <p className="text-[15px]">Ration Card:</p>
                    <p className="text-[15px]">{accountDetails?.rationCardType}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[15px]">Total Family Members:</p>
                    <p className="text-[15px]">{accountDetails?.familyMembers}</p>
                </div>
            </div>
            <Divider />

            <OrderTable rationInputValues={rationInputValues} totalQuantity={totalQuantity} />

            <button
                onClick={handlePlaceOrder}
                className="rounded-md px-3 py-1.5 font-medium bg-sky-700 border-2 border-sky-700 text-white hover:bg-transparent hover:text-sky-700 transition duration-500 ease-in-out"
            >
                Place Order
            </button>
        </div>
    )
}

export default PlaceOrder;