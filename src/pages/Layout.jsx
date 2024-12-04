import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';

const Layout = () => {
    const { accountDetails, loggedIn } = useAuthContext();

    return (
        <div className="flex flex-col">
            <Navbar />
            {
                (loggedIn && accountDetails?.isAdmin)
                ?
                <>
                    <div className="flex">
                        <Sidebar />
                        <Outlet />
                    </div>
                </>
                :
                <>
                    <Outlet />
                </>
            }
        </div>
    )
}

export default Layout;