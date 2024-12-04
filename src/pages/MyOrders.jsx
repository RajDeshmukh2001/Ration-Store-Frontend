import { format } from "date-fns";
import { useGetDataContext } from "../context/GetDataContext";
import { Card, CardBody, Chip, Divider, Tab, Tabs } from "@nextui-org/react";

const MyOrders = () => {
    const { userOrders } = useGetDataContext(); 

    return (
        <>
            <div className="w-full flex justify-center px-4 md:px-12">
                <div className="my-4 md:my-10 max-w-7xl w-full flex flex-col gap-8 md:py-8 md:px-10">
                    <Tabs key="orders" variant="underlined" aria-label="Tabs variants">
                        <Tab key="Active" title="Active">
                            {userOrders?.map((order) => (
                                <Card key={order._id} shadow="none" radius="sm" className="border p-3">
                                    <CardBody className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-sm text-gray-500">#{order._id.slice(0, 8)}</h4>

                                            <div className="flex items-center gap-5">
                                                <h4 className="text-sm">{format(new Date(order.createdAt), 'dd MMM yyyy')}</h4>
                                                <Chip 
                                                    variant="flat" 
                                                    color={order.status === 'pending' ? "primary" : "success"}
                                                    className="font-medium capitalize"
                                                >
                                                    {order.status}
                                                </Chip>
                                            </div>
                                        </div>
                                        <Divider />
                                        <div className="flex flex-col gap-3 text-[15px]">
                                            <div className="grid grid-cols-4 gap-x-10">
                                                <h2 className="font-medium italic">Item</h2>
                                                <h2 className="font-medium text-center italic">Item Price</h2>
                                                <h2 className="font-medium text-center italic">Quantity</h2>
                                                <h2 className="font-medium text-end italic">TotalPrice</h2>
                                            </div>
                                            {order.orderItems.map((item) => (
                                                <div key={item._id} className="grid grid-cols-4 gap-x-10">
                                                    <h2>{item.item}</h2>
                                                    <h2 className="text-center">{item.itemPrice}</h2>
                                                    <h2 className="text-center">{item.itemTotalQuantity} kg</h2>
                                                    <h2 className="text-end">₹ {item.itemTotalPrice}</h2>
                                                </div>
                                            ))}
                                            <Divider />
                                            <div className="grid grid-cols-4 gap-x-10">
                                                <h2 className="font-semibold">Total</h2>
                                                <h2></h2>
                                                <h2 className="text-center font-semibold">{order.totalQuantity} kg</h2>
                                                <h2 className="text-end font-semibold">₹ {order.totalPrice}</h2>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </Tab>

                        <Tab key="history" title="History"></Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default MyOrders;