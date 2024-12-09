import { Link } from "react-router-dom";
import UserProfileMenu from "./UserProfileMenu";
import { useAuthContext } from "../context/AuthContext";
import Button from "./Button";

const ToggleMenu = () => {
    const { loggedIn } = useAuthContext();
    return (
        <div className="hidden md:block">
            <div className="ml-4 flex items-center gap-6 md:ml-6">
                {loggedIn 
                    ?
                    <>
                        <UserProfileMenu />
                    </>
                    :
                    <>
                        <Link to='/login' className="rounded-md px-3 py-1.5 font-medium bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition duration-500 ease-in-out">LOGIN</Link>

                        <Button value="ADMIN" navigatTo="/admin_login" btn={false} />
                    </>

                }
            </div>
        </div>
    )
}

export default ToggleMenu;