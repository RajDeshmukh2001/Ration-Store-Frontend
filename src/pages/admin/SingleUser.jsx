import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetDataContext } from '../../context/GetDataContext';
import { Avatar, Card, CardBody, CardHeader, Divider, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { format } from 'date-fns';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';

const SingleUser = () => {
    const { id } = useParams();
    const { singleUser, getSingleUser } = useGetDataContext();

    useEffect(() => {
        getSingleUser(id);
    }, []);

    return (
        <div className="w-full px-4 py-8 md:py-10 md:mx-16">
            <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                    <Card shadow="none" radius="sm" className="w-full basis-1/3 border p-2.5 h-full">
                        <CardHeader className="flex items-center justify-center">
                            <Avatar isBordered showFallback color="primary" src="https://images.unsplash.com/broken" />
                        </CardHeader>

                        <CardBody>
                            <div className="flex flex-col justify-center items-center gap-1.5">
                                <h1 className="md:text-lg font-semibold">{singleUser?.user?.fullname}</h1>

                                <div className="flex gap-1 md:gap-2">
                                    <h4 className="text-[13px] md:text-[15px] text-gray-700">{singleUser?.user?.email}</h4>
                                    <Divider orientation="vertical" />
                                    <h4 className="text-[13px] md:text-[15px] text-gray-700">+91 {singleUser?.user?.phone}</h4>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    <Card shadow="none" radius="sm" className="w-full basis-3/5 border h-full">
                        <CardBody className="h-full flex flex-col gap-4">
                            <div className="flex gap-2 items-center">
                                <h2 className="text-[15px] italic text-gray-600">RFID : </h2>
                                <h6 className="text-[15px]">{singleUser?.user?.RFID}</h6>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h2 className="text-[15px] italic text-gray-600">Ration Card Type :</h2>
                                <h6 className="text-[15px]">{singleUser?.user?.rationCardType}</h6>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h2 className="text-[15px] italic text-gray-600">Total Family Members :</h2>
                                <h6 className="text-[15px]">{singleUser?.user?.familyMembers}</h6>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h2 className="text-[15px] italic text-gray-600">Address :</h2>
                                <h6 className="text-[15px]">{singleUser?.user?.address}</h6>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <Divider />

                <div className="flex flex-col gap-4">
                    <h1 className="text-[15px] md:text-base ml-2 font-semibold uppercase text-gray-700">Orders</h1>
                    <Table>
                        <TableHeader>
                            <TableColumn>ORDER ID</TableColumn>
                            <TableColumn>RATION (ORDER)</TableColumn>
                            <TableColumn align="center">MAXIMUM QTY</TableColumn>
                            <TableColumn align="center">TOTAL QTY</TableColumn>
                            <TableColumn align="center">TOTAL PRICE</TableColumn>
                            <TableColumn align="center">DATE</TableColumn>
                            <TableColumn align="center">STATUS</TableColumn>
                            <TableColumn align="end">ACTIONS</TableColumn>
                        </TableHeader>

                        <TableBody>
                            {
                                singleUser?.orders.map((order) => (
                                    <TableRow key={order._id}>
                                        <TableCell>#{order._id.slice(20)}</TableCell>
                                        <TableCell className="flex flex-wrap gap-1">
                                            {order.orderItems?.map((item, index) => (
                                                <p key={item._id}>
                                                    {item.item}
                                                    {index < order.orderItems.length - 1 && ","}
                                                </p>
                                            ))}
                                        </TableCell>
                                        <TableCell>{order.maxQuantity} kg</TableCell>
                                        <TableCell>{order.totalQuantity} kg</TableCell>
                                        <TableCell>₹ {order.totalPrice}</TableCell>
                                        <TableCell>{format(new Date(order.createdAt), 'dd MMM yyyy')}</TableCell>
                                        <TableCell
                                            className={`capitalize ${order.status === 'pending' ? 'text-primary' : 'text-green-600'}`}
                                        >
                                            {order.status}
                                        </TableCell>
                                        <TableCell>
                                            <Dropdown>
                                                <DropdownTrigger>
                                                    <Button isIconOnly size="sm" variant="light">
                                                        <PiDotsThreeVerticalBold />
                                                    </Button>
                                                </DropdownTrigger>

                                                <DropdownMenu>
                                                    <DropdownItem>
                                                        <Link to={`/orders/${order._id}`} className="flex w-full">View Order</Link>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default SingleUser;