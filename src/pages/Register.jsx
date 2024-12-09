import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate, useNavigate } from "react-router-dom";
import useHandleSubmitForm from '../custom_hooks/useHandleSubmitForm';
import Button from '../components/Button';

const Registration = () => {
    const { handleSubmitForm } = useHandleSubmitForm();
    const { loggedIn } = useAuthContext();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        phone: '',
        password: '',
        cpassword: ''
    })

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const URI = `${import.meta.env.VITE_APP_API_BASE_URL}/auth/registration`;
    const redirectTo = '/update_profile';

    return (
        <>
            {loggedIn && <Navigate to="/" replace />}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 md:py-6 lg:px-8">
                <div>
                    <h2 className="mt-10 text-center text-lg md:text-xl font-semibold text-gray-900">
                        Create an account
                    </h2>
                </div>

                <div className="mt-10 md:mx-auto md:w-full md:max-w-sm">
                    <form method="POST" className="space-y-6" onSubmit={(e) => handleSubmitForm(e, user, URI, navigate, redirectTo)}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email
                                <span className="text-red-500"> *</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Enter your email"
                                    className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                                Phone
                                <span className="text-red-500"> *</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    required
                                    value={user.phone}
                                    onChange={handleInputs}
                                    placeholder="Enter your phone number"
                                    className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                                <span className="text-red-500"> *</span>
                            </label>

                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Create a password"
                                    className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirm_password" className="block text-sm/6 font-medium text-gray-900">
                                Confirm Password
                                <span className="text-red-500"> *</span>
                            </label>

                            <div className="mt-2">
                                <input
                                    id="confirm_password"
                                    name="cpassword"
                                    type="password"
                                    required
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                    placeholder="Confirm your password"
                                    className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                                />
                            </div>
                        </div>

                        <div>
                            <Button value="REGISTER" btn={true} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration;