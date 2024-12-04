import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const routes = [
    { id: 1, route: "/", name: "HOME" },
    { id: 2, route: "/", name: "RATION" },
    { id: 3, route: "/", name: "ABOUT" },
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
                                    <Link
                                        key={route.id}
                                        to={route.route}
                                        className="rounded-md px-3 py-2 text-lg font-medium text-sky-700 hover:bg-sky-700 hover:text-white transition duration-700 ease-in-out"
                                    >
                                        {route.name}
                                    </Link>
                                ))}

                                {loggedIn &&
                                    <Link
                                        to='/order'
                                        className="rounded-md px-3 py-2 text-lg font-medium text-sky-700 hover:bg-sky-700 transition hover:text-white duration-700 ease-in-out"
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