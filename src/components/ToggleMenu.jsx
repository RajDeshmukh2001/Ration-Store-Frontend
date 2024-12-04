import { Link } from "react-router-dom";
import UserProfileMenu from "./UserProfileMenu";
import { useAuthContext } from "../context/AuthContext";

const ToggleMenu = () => {
    const { loggedIn } = useAuthContext();
    return (
        <div className="hidden md:block">
            <div className="ml-4 flex items-center gap-6 md:ml-6">
                {loggedIn ?
                    (
                        <><UserProfileMenu /></>
                    ) :
                    (
                        <>
                            <Link to='/login' className="rounded-md px-3 py-1.5 font-medium bg-transparent border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white transition duration-500 ease-in-out">LOGIN</Link>

                            <Link to='/admin_login' className="rounded-md px-3 py-1.5 font-medium bg-sky-700 border-2 border-sky-700 text-white hover:bg-transparent hover:text-sky-700 transition duration-500 ease-in-out">ADMIN</Link>

                        </>
                    )
                }
            </div>
        </div>
    )
}

export default ToggleMenu;