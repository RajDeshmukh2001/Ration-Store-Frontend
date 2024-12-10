import { Link, Navigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuthContext } from "../../context/AuthContext";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useGetDataContext } from "../../context/GetDataContext";

const images = {
    Wheat: './wheat_bowl.jpg',
    Rice: './rice_bowl.jpg',
    Jowar: './jowar.png',
    Sugar: './sugar_bowl.jpg',
    Bajra: './bajra.png',
    Toor: './toor_dal.jpg'
}

const ManageRation = () => {
    const { loggedIn } = useAuthContext();
    const { rationItems } = useGetDataContext();

    const getImage = (itemName) => {
        const image = Object.keys(images).find((key) =>
            itemName.toLowerCase().includes(key.toLowerCase())
        );

        return images[image];
    };

    return (
        <>
            {!loggedIn && <Navigate to="/admin_login" replace />}
            <div className="w-full flex flex-col gap-10 px-4 py-8 md:py-10 md:mx-16">
                <div className="self-end">
                    <Button value="Add Ration Item" navigatTo="/ration/add_ration_item" btn={false} />
                </div>

                <div className="grid md:grid-cols-4 gap-x-6 gap-y-10">
                    {rationItems?.map((item) => (
                        <Card key={item._id} shadow="none" radius="sm" isPressable className="border">
                            <CardBody className="overflow-visible p-0 shadow rounded-lg">
                                <Image
                                    shadow="none"
                                    radius="sm"
                                    width="100%"
                                    alt={item.item}
                                    className="w-full object-cover max-h-36"
                                    src={getImage(item.itemname)}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col items-start gap-2 md:gap-3">
                                <div className="w-full flex items-center justify-between">
                                    <h1 className="md:mb-2 font-semibold capitalize">{item.itemname}</h1>
                                    <Link to="#update" className="bg-primary font-medium py-1 px-2 text-white rounded text-sm border-2 border-primary hover:bg-transparent hover:text-primary transition duration-700 ease-in-out">Update</Link>
                                </div>

                                <div className="flex items-center justify-between w-full">
                                    <h4 className="text-sm">Antyodaya Anna Yojana</h4>
                                    <p className="text-primary tracking-wide text-sm">₹{item.prices.Antyodaya_Anna_Yojana}/kg</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <h4>Priority Household</h4>
                                    <p className="text-primary tracking-wide">₹{item.prices.Priority_Household}/kg</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <h4>Above Poverty Line</h4>
                                    <p className="text-primary tracking-wide">₹{item.prices.Above_Poverty_Line}/kg</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <h4>Below Poverty Line</h4>
                                    <p className="text-primary tracking-wide">₹{item.prices.Below_Poverty_Line}/kg</p>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ManageRation;