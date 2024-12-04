import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [accountDetails, setAccountDetails] = useState();

    const auth = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/auth/authorized_account`, { withCredentials: true, });
            setLoggedIn(true);
            setAccountDetails(res.data?.account);
        } catch (error) {
            setLoggedIn(false);
        }
    }

    useEffect(() => {
        auth();
    }, [loggedIn]);

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, accountDetails, setAccountDetails, auth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}