import ToggleMenu from "./ToggleMenu";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import NavbarItems from "../sub_components/NavbarItems";

const Navbar = () => {

    return (
        <nav className="h-16 md:h-20">
            <div className="h-16 md:h-20 fixed top-0 w-full z-50 shadow bg-white">
                <div className="flex mx-auto max-w-7xl px-4 md:px-0 h-16 md:h-20 items-center justify-between">
                    <Link to="/" className="uppercase text-primary text-lg md:text-xl font-semibold">Ration  Store</Link>

                    <NavbarItems />

                    <ToggleMenu />

                    <MobileNavbar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
