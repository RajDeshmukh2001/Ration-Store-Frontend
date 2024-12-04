import axios from 'axios';
import { useAuthContext } from './AuthContext';
import { createContext, useContext, useEffect, useState } from 'react';

export const GetDataContext = createContext();

export const DataProvider = ({ children }) => {
    const [rationItems, setRationItems] = useState();
    const [userOrders, setUserOrders] = useState();
    const [orders, setOrders] = useState();
    const [users, setUsers] = useState();

    const { accountDetails } = useAuthContext();
    const id = accountDetails?._id?.toString();

    const getRationItems = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/ration`);
            setRationItems(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getUserOrders = async () => {
        if (!id) {
            return;
        }

        try {
            const res = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/user/my_orders/${id}`);
            setUserOrders(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getAllUsers = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/user`);
            setUsers(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getAllOrders = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/order`);
            setOrders(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getRationItems();
    }, []);

    useEffect(() => {
        getUserOrders();
    }, [id]);

    useEffect(() => {
        getAllUsers();
        getAllOrders();
    }, []);


    return (
        <GetDataContext.Provider value={{ rationItems, userOrders, users, orders, getRationItems, getUserOrders, getAllOrders }}>
            {children}
        </GetDataContext.Provider>
    )
}

export const useGetDataContext = () => {
    return useContext(GetDataContext);
}