import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const routes = [
    { id: 1, route: "/", name: "HOME" },
    { id: 2, route: "#ration", name: "RATION" },
    { id: 3, route: "#about", name: "ABOUT" },
]

const NavbarItems = () => {
    const { accountDetails, loggedIn } = useAuthContext();

    return (
        <>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    {
                        (loggedIn && accountDetails?.isAdmin)
                            ?
                            <>
                            </>
                            :
                            <>
                                {routes.map((route) => (
                                    route.route.startsWith("#") ? (
                                        <a
                                            key={route.id}
                                            href={route.route}
                                            className="rounded-md px-3 py-2 text-lg font-medium text-primary hover:bg-primary hover:text-white transition duration-700 ease-in-out"
                                        >
                                            {route.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={route.id}
                                            to={route.route}
                                            className="rounded-md px-3 py-2 text-lg font-medium text-primary hover:bg-primary hover:text-white transition duration-700 ease-in-out"
                                        >
                                            {route.name}
                                        </Link>
                                    )
                                ))}

                                {loggedIn &&
                                    <Link
                                        to='/order'
                                        className="rounded-md px-3 py-2 text-lg font-medium text-primary hover:bg-primary transition hover:text-white duration-700 ease-in-out"
                                    >
                                        ORDER
                                    </Link>
                                }
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default NavbarItems;