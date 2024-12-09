import { Link } from "react-router-dom";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useGetDataContext } from "../../context/GetDataContext";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, User } from "@nextui-org/react";

const Users = () => {
    const { users } = useGetDataContext();

    return (
        <div className="w-full px-4 py-8 md:py-10 md:mx-16">
            <Table radius="sm" aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>USER ID</TableColumn>
                    <TableColumn>FULLNAME</TableColumn>
                    <TableColumn>PHONE</TableColumn>
                    <TableColumn>RFID</TableColumn>
                    <TableColumn>RATION CARD</TableColumn>
                    <TableColumn align="center">FAMILY MEMBERS</TableColumn>
                    <TableColumn>ADDRESS</TableColumn>
                    <TableColumn align="end">ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        users?.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell>#{user._id.slice(20)}</TableCell>
                                <TableCell className="user-info">
                                    <User
                                        name={user.fullname}
                                        description={user.email}
                                        classNames={{
                                            description: "text-gray-700"
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.RFID}</TableCell>
                                <TableCell>{user.rationCardType}</TableCell>
                                <TableCell>{user.familyMembers}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button isIconOnly size="sm" variant="light">
                                            <PiDotsThreeVerticalBold />
                                        </Button>
                                    </DropdownTrigger>

                                    <DropdownMenu>
                                        <DropdownItem>
                                            <Link to={`/users/${user._id}`} className="flex w-full">View User</Link>
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
    )
}

export default Users;