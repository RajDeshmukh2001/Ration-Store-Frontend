import Button from './Button';
import Footer from './Footer';
import About from '../pages/About';
import RationItems from '../pages/RationItems';

const UserHomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-5 md:gap-10">
                <div className="w-full relative h-[80vh] md:h-[75vh]">
                    <img src="./background.jpg" alt="" className="w-full object-cover absolute h-full opacity-35 " />

                    <div className="w-full h-full flex md:justify-center md:items-center px-4 py-12 md:px-12 md:py-0">
                        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between md:gap-0 md:items-center">
                            <div className="flex flex-col gap-1 md:gap-4 z-10">
                                <h1 className="text-[26px] md:text-6xl font-extrabold">Say Goodbye to Ration Hassles</h1>
                                <h4 className="text-base md:text-xl">Manage entitlements, track distribution, and ensure transparency in one <br /> powerful platform.</h4>
                                <h6 className="text-sm text-gray-600">RFID-based tracking, real-time updates, and secure management—all in one place.</h6>
                                <div className="mt-4 md:mt-0 max-w-36">
                                    <Button value="Know More" btn={false} />
                                </div>
                            </div>

                            <div className="flex relative -mt-20 md:mt-0">
                                <img src="./wheat_grains.png" alt="wheat_rice" className="max-w-[370px] lg:max-w-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <RationItems />
                <About />
                <Footer />
            </div>

        </>
    )
}

export default UserHomePage;