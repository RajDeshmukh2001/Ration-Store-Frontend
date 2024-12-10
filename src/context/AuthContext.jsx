import axios from 'axios';
import { toast } from 'sonner';
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [accountDetails, setAccountDetails] = useState(null);

    const auth = async () => {

        try {
            const res = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/auth/authorized_account`, { withCredentials: true, });
            setLoggedIn(true);
            setAccountDetails(res.data?.account);
        } catch (error) {
            console.error("Error authenticating user:", error);
        }
    }

    const handleLogout = async (navigate) => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/auth/logout`, { withCredentials: true });
            if (res.status === 200) {
                toast.success(res.data.message);
                navigate('/');
                setLoggedIn(false);
                setAccountDetails(null)
            }
        } catch (error) {
            console.error(error.response.data.message);
        }
    }

    useEffect(() => {
        auth();
    }, [loggedIn]);

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, accountDetails, setAccountDetails, auth, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}