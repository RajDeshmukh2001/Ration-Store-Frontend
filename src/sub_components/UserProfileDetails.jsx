import { Link } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { Card, CardBody, AvatarIcon, Avatar, Divider } from "@nextui-org/react";
import Button from "../components/Button";

const UserProfileDetails = () => {
    const { accountDetails } = useAuthContext();

    return (
        <>
            <div className="w-full">
                <Card shadow="none" radius="sm" isPressable className="w-full border">
                    <CardBody className="p-0">
                        <div className="md:grid md:grid-cols-3 md:gap-x-4">
                            <div className="grid grid-cols-4 gap-y-8 md:flex md:flex-col md:items-center md:gap-6 md:col-span-1 p-6 md:px-10 bg-primary-100/80">
                                <div>
                                    <Avatar
                                        isBordered
                                        icon={<AvatarIcon />}
                                        className="w-16 h-16 md:w-20 md:h-20 text-large transition-transform"
                                        classNames={{
                                            base: "bg-gradient-to-br from-blue-200 to-blue-600",
                                            icon: "text-black/80",
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col justify-center col-span-3 md:items-center md:gap-1.5">
                                    <h1 className="text-lg font-semibold">{accountDetails?.fullname}</h1>

                                    <div className="flex flex-col md:flex-row gap-1 md:gap-2">
                                        <h4 className="text-[13px] md:text-[15px] text-gray-700">{accountDetails?.email}</h4>
                                        <Divider orientation="vertical" className="hidden md:block" />
                                        <h4 className="text-[13px] md:text-[15px] text-gray-700">+91 {accountDetails?.phone}</h4>
                                    </div>
                                </div>

                                <div className="col-span-full w-full flex justify-center">
                                    <Button value="Update Profile" navigatTo="/update_profile" btn={false} />
                                </div>
                            </div>

                            <div className="col-span-2 flex flex-col justify-evenly gap-4 p-6 md:py-6 md:px-10">
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-[15px] italic text-gray-600">RFID : </h2>
                                    <h6 className="text-[15px]">{accountDetails?.RFID}</h6>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-[15px] italic text-gray-600">Ration Card Type :</h2>
                                    <h6 className="text-[15px]">{accountDetails?.rationCardType}</h6>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-[15px] italic text-gray-600">Total Family Members :</h2>
                                    <h6 className="text-[15px]">{accountDetails?.familyMembers}</h6>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center">
                                    <h2 className="text-[15px] italic text-gray-600">Address :</h2>
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