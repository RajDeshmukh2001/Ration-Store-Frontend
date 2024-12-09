import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import UserProfileDetails from "../sub_components/UserProfileDetails";

const UserProfile = () => {
    const { loggedIn } = useAuthContext();

    return (
        <>
            {!loggedIn && <Navigate to="/login" replace />}

            <div className="mt-6 md:mt-10 w-full flex justify-center px-4 md:px-12">
                <div className="max-w-7xl flex flex-col gap-10">
                    <UserProfileDetails />

                    <div></div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;