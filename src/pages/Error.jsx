import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <h1 className="text-9xl font-black text-gray-600">
                <span className="text-lime-600">404</span> Error
            </h1>
            <h3 className="text-4xl font-bold text-gray-600">Page not found</h3>
            <Link
                to="/"
                className="mt-6 rounded border-2 border-transparent bg-lime-600 px-4 py-2 text-xl tracking-wide text-white transition delay-[3000] ease-in-out hover:border-lime-600 hover:bg-white hover:text-lime-600"
            >
                Go Back
            </Link>
        </div>
    )
}

export default Error;