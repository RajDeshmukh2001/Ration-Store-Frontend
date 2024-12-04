import axios from "axios";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";

const useHandleSubmitForm = () => {
    const { setLoggedIn } = useAuthContext();

    const handleSubmitForm = async (event, formData, URI, navigate, redirectTo) => {
        event.preventDefault();

        try {
            const res = await axios.post(URI, formData, { withCredentials: true });
            if (res.status === 200) {
                toast.success(res.data.message);
                navigate(redirectTo);
                setLoggedIn(true);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return { handleSubmitForm }
}

export default useHandleSubmitForm;