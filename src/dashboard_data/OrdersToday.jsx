import { useEffect, useState } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { useGetDataContext } from '../context/GetDataContext';

const OrdersToday = () => {
    const [orderToday, setOrderToday] = useState(0);

    const { orders } = useGetDataContext();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];

        const ordersToday = orders.filter(order => {
            const orderDate = new Date(order.createdAt).toISOString().split('T')[0];
            return orderDate === today;
        });

        setOrderToday(ordersToday.length);
    }, [orders]);

    return (
        <>
            <Card isPressable radius="sm" shadow="sm">
                <CardBody className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-gray-600 text-sm">Orders Today</h1>
                            <p className="text-blue-gray-800 font-semibold tracking-wide mt-1.5 text-lg md:text-2xl">{orderToday}</p>
                        </div>
                        <MdOutlineCalendarMonth className="text-4xl p-2 rounded-full bg-purple-50 text-purple-700" />
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm mt-2">
                            <span className="font-medium py-0.5 px-2 bg-green-50 text-green-700 rounded-[3px] mr-2">+4.567%</span>
                            Since yesterday
                        </p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default OrdersToday;