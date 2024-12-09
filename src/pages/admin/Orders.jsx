import { Link, Navigate } from "react-router-dom";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useAuthContext } from "../../context/AuthContext";
import { useGetDataContext } from "../../context/GetDataContext";
import useHandleUpdateStatus from "../../custom_hooks/useHandleUpdateStatus";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";

const Orders = () => {
    const { orders } = useGetDataContext();
    const { loggedIn } = useAuthContext();
    const { handleUpdateStatus } = useHandleUpdateStatus();

    return (
        <>
            {!loggedIn && <Navigate to="/admin_login" replace />}
            <div className="w-full px-4 py-8 md:py-10 md:mx-16">
                <Table radius="sm" aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>ORDER ID</TableColumn>
                        <TableColumn>USER ID</TableColumn>
                        <TableColumn>RFID</TableColumn>
                        <TableColumn>RATION CARD</TableColumn>
                        <TableColumn align="center">FAMILY MEMBERS</TableColumn>
                        <TableColumn>RATION (ORDER)</TableColumn>
                        <TableColumn align="center">MAXIMUM QTY</TableColumn>
                        <TableColumn align="center">TOTAL QTY</TableColumn>
                        <TableColumn align="center">TOTAL PRICE</TableColumn>
                        <TableColumn align="center">STATUS</TableColumn>
                        <TableColumn align="end">ACTIONS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            orders?.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell>#{order._id.slice(20)}</TableCell>
                                    <TableCell>#{order.customer.userId.slice(20)}</TableCell>
                                    <TableCell>{order.customer.RFID}</TableCell>
                                    <TableCell>{order.customer.rationCardType}</TableCell>
                                    <TableCell>{order.customer.totalFamilyMembers}</TableCell>
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
                                                {order.status === 'pending'
                                                    &&
                                                    <DropdownItem>
                                                        <button
                                                            onClick={() => handleUpdateStatus(order._id)}
                                                            className="flex w-full tracking-wide"
                                                        >
                                                            Accepted
                                                        </button>
                                                    </DropdownItem>
                                                }
                                            </DropdownMenu>
                                        </Dropdown>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Orders;