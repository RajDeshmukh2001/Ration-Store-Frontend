import { useEffect, useState } from 'react'
import { Card, CardBody } from '@nextui-org/react';
import { TbUserFilled } from "react-icons/tb";
import { useGetDataContext } from '../../context/GetDataContext';
import { MdOutlineShoppingCart, MdOutlineCalendarMonth } from "react-icons/md";
import TotalRevenue from '../../dashboard_data/TotalRevenue';
import TotalOrders from '../../dashboard_data/TotalOrders';
import OrdersToday from '../../dashboard_data/OrdersToday';
import TotalUsers from '../../dashboard_data/TotalUsers';

const AdminHomePage = () => {
    const { orders, users } = useGetDataContext();

    const [orderToday, setOrderToday] = useState(0);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];

        const ordersToday = orders.filter(order => {
            const orderDate = new Date(order.createdAt).toISOString().split('T')[0];
            return orderDate === today;
        });

        setOrderToday(ordersToday.length);
    }, [orders]);

    return (
        <div className="w-full flex flex-col gap-10 px-4 py-8 md:py-10 md:mx-10">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="w-full grid gap-y-6 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
                    <TotalRevenue />

                    <TotalOrders />

                    <OrdersToday />

                    <TotalUsers />
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default AdminHomePage;