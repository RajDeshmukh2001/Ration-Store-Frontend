import { Link } from "react-router-dom";

const Button = ({ value, navigatTo, btn }) => {
    return (
        <>
            {
                btn
                    ?
                    <button
                        type="submit" 
                        className="w-full border-2 border-primary rounded-md px-3 py-1.5 text-sm md:text-base font-medium text-white bg-primary hover:text-primary hover:bg-white transition duration-700 ease-in-out"
                    >
                        {value}
                    </button>
                    :
                    <Link 
                        to={navigatTo} 
                        className="w-full text-center border-2 border-primary rounded-md px-3 py-1.5 text-sm md:text-base font-medium text-white bg-primary hover:text-primary hover:bg-white transition duration-700 ease-in-out"
                    >
                        {value}
                    </Link>
            }
        </>
    )
}

export default Button;