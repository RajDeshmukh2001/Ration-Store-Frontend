import axios from 'axios';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, AvatarIcon } from "@nextui-org/react";

const UserProfileMenu = () => {
    const { accountDetails, handleLogout } = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className="hidden md:block">
            {!accountDetails?.isAdmin ?
                <>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                size="sm"
                                isBordered
                                as="button"
                                icon={<AvatarIcon />}
                                className="transition-transform"
                                classNames={{
                                    base: "bg-gradient-to-br from-blue-200 to-blue-600",
                                    icon: "text-black/80",
                                }}
                            />
                        </DropdownTrigger>

                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile">
                                <Link to="/profile" className="w-full">Profile</Link>
                            </DropdownItem>

                            <DropdownItem key="orders">
                                <Link to="/my_orders" className="w-full">My Orders</Link>
                            </DropdownItem>

                            <DropdownItem key="logout" color="danger" onClick={() => handleLogout(navigate)}>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </>
                :
                <>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                size="sm"
                                isBordered
                                as="button"
                                icon={<AvatarIcon />}
                                className="transition-transform"
                                classNames={{
                                    base: "bg-gradient-to-br from-blue-200 to-blue-600",
                                    icon: "text-black/80",
                                }}
                            />
                        </DropdownTrigger>

                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="logout">
                                {accountDetails?.username}
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={() => handleLogout(navigate)}>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </>
            }
        </div>
    )
}

export default UserProfileMenu;