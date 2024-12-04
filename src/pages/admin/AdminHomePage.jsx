import { Card, CardBody, CardFooter } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { useGetDataContext } from '../../context/GetDataContext';

const AdminHomePage = () => {
    const [totalRevenue, setTotalRevenue] = useState(0);
    const { orders, users } = useGetDataContext();

    useEffect(() => {
        const revenue = orders?.reduce((acc, order) => {
            return acc + (order.totalPrice || 0);
        }, 0);

        setTotalRevenue(revenue);
    }, [orders]);

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
        <div className="w-full flex flex-col gap-10 py-10 mx-24">
            <div className="w-full grid gap-y-6 md:grid-cols-3 md:gap-x-12 md:gap-y-8">
                <Card isPressable radius="sm" shadow="sm">
                    <CardBody>
                        <h1 className="text-gray-600 text-sm md:text-base">Total Revenue</h1>
                        <p className="text-sky-700 font-bold tracking-wide mt-2 text-lg md:text-2xl">₹ {totalRevenue}</p>
                    </CardBody>
                    <CardFooter className="bg-sky-700" />
                </Card>

                <Card isPressable radius="sm" shadow="sm">
                    <CardBody>
                        <h1 className="text-gray-600 text-sm md:text-base">Total Orders</h1>
                        <p className="text-green-700 font-bold tracking-wide mt-2 text-lg md:text-2xl">{orders.length}</p>
                    </CardBody>
                    <CardFooter className="bg-green-700" />
                </Card>

                <Card isPressable radius="sm" shadow="sm">
                    <CardBody>
                        <h1 className="text-gray-600 text-sm md:text-base">Total Users</h1>
                        <p className="text-orange-700 font-bold tracking-wide mt-2 text-lg md:text-2xl">{users.length}</p>
                    </CardBody>
                    <CardFooter className="bg-orange-700" />
                </Card>

                <Card isPressable radius="sm" shadow="sm">
                    <CardBody>
                        <h1 className="text-gray-600 text-sm md:text-base">Orders Today</h1>
                        <p className="text-yellow-700 font-bold tracking-wide mt-2 text-lg md:text-2xl">{orderToday}</p>
                    </CardBody>
                    <CardFooter className="bg-yellow-700" />
                </Card>
            </div>
        </div>
    )
}

export default AdminHomePage;