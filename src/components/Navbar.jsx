import { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import ResponsiveMobileMenu from "./ResponsiveMobileMenu";
import NavbarItems from "../sub_components/NavbarItems";

const routes = [
    { id: 1, route: "/", name: "HOME" },
    { id: 2, route: "/", name: "RATION" },
    { id: 3, route: "/", name: "ABOUT" },
]

const Navbar = () => {
    const { accountDetails, loggedIn } = useAuthContext();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="h-16 md:h-20">
            <div className="h-16 md:h-20 fixed top-0 w-full z-50 shadow bg-white">
                <div className="flex mx-auto max-w-7xl px-4 md:px-0 h-16 md:h-20 items-center justify-between">
                    <Link to="/" className="uppercase text-sky-700 text-base md:text-xl font-semibold">Ration  Store</Link>

                    <NavbarItems />

                    <ToggleMenu />

                    {/* <ResponsiveMobileMenu /> */}

                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="relative inline-flex items-center justify-center rounded-md bg-sky-700 p-2 text-gray-400 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-sky-800"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden z-50 bg-sky-700 relative mt-16" id="mobile-menu">
                    <div className="flex flex-col gap-2 px-2 pb-3 pt-2 sm:px-3">
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
                                            className="rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white hover:text-sky-700 transition duration-700 ease-in-out"
                                        >
                                            {route.name}
                                        </Link>
                                    ))}

                                    {loggedIn &&
                                        <Link
                                            to='/order'
                                            className="rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white hover:text-sky-700 transition duration-700 ease-in-out"
                                        >
                                            ORDER
                                        </Link>
                                    }
                                </>
                        }
                    </div>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="flex items-center px-5">
                            <div className="shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">
                                    Tom Cook
                                </div>
                                <div className="text-sm font-medium leading-none text-gray-400">
                                    tom@example.com
                                </div>
                            </div>
                            <button
                                type="button"
                                className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="sr-only">View notifications</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Your Profile
                            </a>
                            <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Settings
                            </a>
                            <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
