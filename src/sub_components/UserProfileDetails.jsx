import { Link } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { Card, CardBody, AvatarIcon, Avatar, Divider } from "@nextui-org/react";

const UserProfileDetails = () => {
    const { accountDetails } = useAuthContext();

    return (
        <>
            <div className="w-full">
                <Card shadow="none" radius="sm" isPressable className="w-full border">
                    <CardBody className="p-0">
                        <div className="grid grid-cols-3 gap-x-4">
                            <div className="flex flex-col items-center gap-6 col-span-1 py-6 px-10 bg-sky-100">
                                <Avatar
                                    isBordered
                                    icon={<AvatarIcon />}
                                    className="w-20 h-20 text-large transition-transform"
                                    classNames={{
                                        base: "bg-gradient-to-br from-sky-200 to-sky-600",
                                        icon: "text-black/80",
                                    }}
                                />
                                <div className="flex flex-col items-center gap-1.5">
                                    <h1 className="text-lg font-semibold">{accountDetails?.fullname}</h1>

                                    <div className="flex gap-2">
                                        <h4 className="text-[15px] text-gray-700">{accountDetails?.email}</h4>
                                        <Divider orientation="vertical" />
                                        <h4 className="text-[15px] text-gray-700">+91 {accountDetails?.phone}</h4>
                                    </div>
                                </div>

                                <div className="w-full flex items-center justify-center">
                                    <Link to="/update_profile" className="w-full rounded-md px-3 py-1.5 text-[15px] font-medium text-center bg-sky-700 border-2 border-sky-700 text-white hover:bg-transparent hover:text-sky-700 transition duration-500 ease-in-out">Update Profile</Link>
                                </div>
                            </div>

                            <div className="col-span-2 flex flex-col justify-evenly gap-4 py-6 px-10">
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-[15px] italic text-gray-500">RFID : </h2>
                                    <h6 className="text-[15px]">{accountDetails?.RFID}</h6>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-[15px] italic text-gray-500">Ration Card Type :</h2>
                                    <h6 className="text-[15px]">{accountDetails?.rationCardType}</h6>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-[15px] italic text-gray-500">Total Family Members :</h2>
                                    <h6 className="text-[15px]">{accountDetails?.familyMembers}</h6>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-[15px] italic text-gray-500">Address :</h2>
                                    <h6 className="text-[15px]">{accountDetails?.address}</h6>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default UserProfileDetails;