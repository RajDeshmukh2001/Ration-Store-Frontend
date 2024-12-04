import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useGetDataContext } from '../context/GetDataContext';

const useHandleUpdateStatus = () => {
    const navigate = useNavigate();
    const { getAllOrders } = useGetDataContext();
    
    const handleUpdateStatus = async (id) => {
        try {
            const res = await axios.patch(`${import.meta.env.VITE_APP_API_BASE_URL}/order/update_status?id=${id}`);
            if (res.status === 200) {
                toast.success(res.data.message);
                getAllOrders();
                navigate('/orders');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return { handleUpdateStatus }
}

export default useHandleUpdateStatus;