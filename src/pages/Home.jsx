import AdminHomePage from "./admin/AdminHomePage";
import UserHomePage from "../components/UserHomePage";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
    const { accountDetails, loggedIn } = useAuthContext();

    return (
        <>
            {
                (loggedIn && accountDetails?.isAdmin)
                    ?
                    <>
                        <AdminHomePage />
                    </>
                    :
                    <>
                        <UserHomePage />
                    </>
            }
        </>
    )
}

export default Home;