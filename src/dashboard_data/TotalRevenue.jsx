import { useEffect, useState } from 'react'
import { TbCurrencyRupee } from 'react-icons/tb';
import { Card, CardBody } from '@nextui-org/react';
import { useGetDataContext } from '../context/GetDataContext';

const TotalRevenue = () => {
    const [totalRevenue, setTotalRevenue] = useState(0);
    const { orders } = useGetDataContext();

    useEffect(() => {
        const revenue = orders?.reduce((acc, order) => {
            return acc + (order.totalPrice || 0);
        }, 0);

        setTotalRevenue(revenue);
    }, [orders]);

    return (
        <>
            <Card isPressable radius="sm" shadow="sm">
                <CardBody className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-gray-600 text-sm">Total Revenue</h1>
                            <p className="text-blue-gray-800 font-semibold tracking-wide mt-1.5 text-lg md:text-2xl">₹ {totalRevenue}</p>
                        </div>
                        <TbCurrencyRupee className="text-4xl p-2 rounded-full bg-primary-50 text-primary" />
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm mt-2">
                            <span className="font-medium py-0.5 px-2 bg-green-50 text-green-700 rounded-[3px] mr-2">+4.567%</span>
                            Since last week
                        </p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default TotalRevenue;