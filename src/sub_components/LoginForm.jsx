import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useHandleSubmitForm from '../custom_hooks/useHandleSubmitForm';
import Button from '../components/Button';

const LoginForm = ({ title, URI, redirectTo, isAdmin }) => {
    const { handleSubmitForm } = useHandleSubmitForm();
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        isAdmin: isAdmin
    });

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setCredentials({ ...credentials, [name]: value });
    }

    return (
        <>
            <div className="mt-5">
                <h2 className="text-center text-lg md:text-xl font-semibold text-gray-900">
                    {title}
                </h2>
            </div>

            <div className="mt-10 md:mx-auto md:w-full md:max-w-sm">
                <form method="POST" className="space-y-6" onSubmit={(e) => handleSubmitForm(e, credentials, URI, navigate, redirectTo)}>
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
                                value={credentials.email}
                                onChange={handleInputs}
                                placeholder="Enter your email"
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
                                value={credentials.password}
                                onChange={handleInputs}
                                placeholder="Enter your password"
                                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                            />
                        </div>
                        <div className="text-right">
                            <Link to="#" className="text-xs font-medium text-primary hover:text-primary-500">
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <div className="w-full">
                        {/* <button
                            type="submit"
                            className="flex w-full justify-center rounded-md px-3 py-1.5 font-medium bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-primary transition duration-500 ease-in-out"
                        >
                            LOGIN
                        </button> */}
                        <Button value="LOGIN" btn={true} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;