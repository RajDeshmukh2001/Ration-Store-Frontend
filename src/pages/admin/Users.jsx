import { Link } from "react-router-dom";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useGetDataContext } from "../../context/GetDataContext";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";

const Users = () => {
    const { users } = useGetDataContext();

    return (
        <div className="w-full flex flex-col gap-10 py-10 mx-24">
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>USER ID</TableColumn>
                    <TableColumn>FULLNAME</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
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
                                <TableCell>{user.fullname}</TableCell>
                                <TableCell>{user.email}</TableCell>
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