import { Card, CardBody } from '@nextui-org/react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useGetDataContext } from '../context/GetDataContext';

const TotalOrders = () => {
    const { orders, users } = useGetDataContext();

    return (
        <>
            <Card isPressable radius="sm" shadow="sm">
                <CardBody className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-gray-600 text-sm">Total Orders</h1>
                            <p className="text-blue-gray-800 font-semibold tracking-wide mt-1.5 text-lg md:text-2xl">{orders.length}</p>
                        </div>
                        <MdOutlineShoppingCart className="text-4xl p-2 rounded-full bg-brown-50 text-brown-700" />
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm mt-2">
                            <span className="font-medium py-0.5 px-2 bg-red-50 text-red-700 rounded-[3px] mr-2">-4.567%</span>
                            Since last month
                        </p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default TotalOrders;