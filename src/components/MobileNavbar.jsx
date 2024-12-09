import Button from "./Button";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Drawer, Typography, IconButton, List, ListItem } from "@material-tailwind/react";

const routes = [
    { id: 1, route: "/order", name: "Order Ration" },
    { id: 2, route: "/profile", name: "Profile" },
    { id: 3, route: "/my_orders", name: "My Orders" },
    { id: 4, route: "/", name: "DASHBOARD" },
    { id: 5, route: "/ration", name: "RATION" },
    { id: 6, route: "/orders", name: "ORDERS" },
    { id: 7, route: "/users", name: "USERS" },
]

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    const { accountDetails, loggedIn, handleLogout } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className="md:hidden flex flex-col gap-2">
            <IconButton
                variant="text"
                className={`ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent ${open ? 'hidden' : 'block'}`}
                ripple={false}
                onClick={openDrawer}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </IconButton>

            <Drawer open={open} onClose={closeDrawer} overlay={false} size={350}>
                <div className="flex items-center justify-between p-3 shadow">
                    <Typography className="ml-2 text-primary text-lg font-semibold font-[Poppins]">
                        RATION STORE
                    </Typography>
                    <IconButton variant="text" onClick={closeDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </IconButton>
                </div>

                <List>
                    {
                        !accountDetails?.isAdmin &&
                        <>
                            <ListItem className={`${path === '/' ? 'bg-primary-50 text-primary' : ''}`} onClick={closeDrawer}>
                                <Link to="/">Home</Link>
                            </ListItem>

                            <ListItem className={`${path === '/#ration' ? 'bg-primary-50 text-primary' : ''}`} onClick={closeDrawer}>
                                <a href="#ration">Ration</a>
                            </ListItem>

                            <ListItem className={`${path === '/#about' ? 'bg-primary-50 text-primary' : ''}`} onClick={closeDrawer}>
                                <a href="#about">About</a>
                            </ListItem>
                        </>
                    }

                    {
                        loggedIn && accountDetails?.isAdmin &&
                        <>
                            {
                                routes.slice(3).map((route) => (
                                    <ListItem
                                        key={route.id}
                                        onClick={closeDrawer}
                                        className={`${(path === route.route || (path === '/ration/add_ration_item' && route.id === 5)) ? 'bg-primary-50 text-primary' : ''}`}
                                    >
                                        <Link to={route.route} className="w-full">{route.name}</Link>
                                    </ListItem>
                                ))
                            }

                            <hr />
                            <ListItem className="py-4 flex items-center gap-2">
                                <FaCircleUser className="text-xl" />
                                <span className="capitalize">{accountDetails?.username}</span>
                            </ListItem>
                            <hr />
                        </>
                    }
                    {
                        loggedIn && !accountDetails?.isAdmin &&
                        <>
                            {
                                routes.slice(0, 3).map((route) => (
                                    <>
                                        <ListItem
                                            key={route.id}
                                            onClick={closeDrawer}
                                            className={`${path === route.route ? 'bg-primary-50 text-primary' : ''}`}
                                        >
                                            <Link to={route.route} className="w-full">{route.name}</Link>
                                        </ListItem>
                                        {route.id === 1 && <hr />}
                                    </>
                                ))
                            }
                            <hr />
                        </>
                    }
                </List>

                <div className="mt-6 flex items-center justify-between gap-8 px-5">
                    {
                        loggedIn
                            ?
                            <>
                                <button
                                    onClick={() => { handleLogout(navigate); closeDrawer() }}
                                    type="submit"
                                    className="w-full border-2 border-primary rounded-md px-3 py-1.5 text-sm md:text-base font-medium text-white bg-primary hover:text-primary hover:bg-white transition duration-700 ease-in-out"
                                >
                                    LOGOUT
                                </button>

                            </>
                            :
                            <>
                                <Link to="/login" onClick={closeDrawer} className="w-full text-center rounded-md text-sm px-3 py-1.5 font-medium bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition duration-500 ease-in-out">LOGIN</Link>
                                <Button value="ADMIN" navigatTo="/admin_login" btn={false} />
                            </>
                    }
                </div>
            </Drawer>
        </div>
    )
}

export default MobileNavbar;