import { Link, Navigate } from 'react-router-dom';
import LoginForm from '../../sub_components/LoginForm';
import { useAuthContext } from '../../context/AuthContext';

const AdminLogin = () => {
    const { loggedIn } = useAuthContext();

    const URI = `${import.meta.env.VITE_APP_API_BASE_URL}/auth/login`;

    return (
        <>
            {loggedIn && <Navigate to="/" replace />}
            <div className="flex min-h-screen items-center justify-center px-6 md:py-12 lg:px-8">
                <div className="flex flex-col gap-5 min-w-96 border py-8 md:py-10 px-8 rounded-md bg-white">
                    <h2 className="text-primary text-base md:text-xl text-center font-semibold">RATION STORE</h2>

                    <LoginForm title="Admin Panel" URI={URI} redirectTo="/" isAdmin={true} />

                    <Link to="/" className="text-center text-sm">
                        <span className="text-base">&larr; </span>
                        Go back
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;