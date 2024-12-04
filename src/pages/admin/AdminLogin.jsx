import React from 'react'
import LoginForm from '../../sub_components/LoginForm';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    const URI = `${import.meta.env.VITE_APP_API_BASE_URL}/auth/login`;

    return (
        <div className="flex min-h-screen items-center justify-center px-6 md:py-12 lg:px-8">
            <div className="flex flex-col gap-5 min-w-96 border px-6 py-8 md:py-10 lg:px-8 rounded-md bg-white">
                <h2 className="text-sky-700 text-base md:text-xl text-center font-semibold">RATION STORE</h2>
                
                <LoginForm title="Admin Panel" URI={URI} redirectTo="/" isAdmin={true} />

                <Link to="/" className="text-center text-sm">
                    <span className="text-base">&larr; </span> 
                    Go back
                </Link>
            </div>
        </div>
    )
}

export default AdminLogin;