import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const useGetData = () => {
    const getData = async () => {
        try {
            const res = await axios.get(URI);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }
    return { getData }
}

export default useGetData;