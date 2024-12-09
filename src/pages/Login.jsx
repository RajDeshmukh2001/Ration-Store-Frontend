import { Link, Navigate } from 'react-router-dom';
import LoginForm from '../sub_components/LoginForm';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
    const { loggedIn } = useAuthContext();
    
    const URI = `${import.meta.env.VITE_APP_API_BASE_URL}/auth/login`;

    return (
        <>
            {loggedIn && <Navigate to="/" replace />}
            <div className="md:mt-10 flex min-h-full flex-1 flex-col justify-center px-6 py-8 md:py-12 lg:px-8">
                <LoginForm title="Login to your account" URI={URI} redirectTo="/" isAdmin={false} />

                <p className="mt-10 text-center text-sm text-gray-500">
                    New user?{' '}
                    <Link to="/register" className="font-semibold text-primary hover:text-primary-500">
                        Create account
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Login;