import axios from 'axios';
import { toast } from 'sonner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const useHandleUpdateForm = () => {
    const { auth } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event, formData, id) => {
        event.preventDefault();

        setLoading(true);
        if (!/^[0-9]{10}$/.test(formData.phone)) {
            toast.error('Phone number must be 10 digits');
            return;
        }

        try {
            const res = await axios.put(`${import.meta.env.VITE_APP_API_BASE_URL}/user/update/${id}`, formData);
            
            if (res.status === 201) {
                toast.success(res.data.message);
                setLoading(false);
                auth();
                navigate('/profile');
            }
        } catch (error) {
            setLoading(false);
            toast.error(error.response.data.message || "An error occurred");
        }
    }
    return { handleSubmit, loading }
}

export default useHandleUpdateForm;