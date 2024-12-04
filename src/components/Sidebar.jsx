import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const routes = [
    { id: 1, route: "/", name: "DASHBOARD" },
    { id: 2, route: "/ration", name: "RATION" },
    { id: 3, route: "/orders", name: "ORDERS" },
    { id: 4, route: "/users", name: "USERS" },
]

const Sidebar = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div className="sidebar hidden w-1/5 md:block">
                <div className="fixed left-0 top-[5rem] h-full w-1/6 shadow-md bg-white">
                    <div className="flex flex-col">
                        {routes.map((route) => (
                            <Link
                                key={route.id}
                                to={route.route}
                                className={`border-b-[1px] border-gray-100 px-10 py-6 text-lg font-medium transition duration-700 ease-in-out ${route.route === path ? "bg-sky-700 text-white hover:bg-sky-700" : "bg-white hover:bg-sky-700  hover:text-white"}`}
                            >
                                {route.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;