import { Link } from "react-router-dom";
import { useGetDataContext } from "../../context/GetDataContext";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const images = {
    Wheat: './wheat_bowl.jpg',
    Rice: './rice_bowl.jpg',
    Jowar: './jowar.png',
    Sugar: './sugar_bowl.jpg',
    Bajra: './bajra.png',
    Toor: './toor_dal.jpg'
}

const ManageRation = () => {
    const { rationItems } = useGetDataContext();

    const getImage = (itemName) => {
        const image = Object.keys(images).find((key) =>
            itemName.toLowerCase().includes(key.toLowerCase())
        );

        return images[image];
    };

    return (
        <>
            <div className="w-full flex flex-col gap-10 py-10 mx-24">
                <div className="w-full flex justify-end">
                    <Link to="/ration/add_ration_item" className="rounded-md px-3 py-1.5 font-medium bg-sky-700 border-2 border-sky-700 text-white hover:bg-transparent hover:text-sky-700 transition duration-500 ease-in-out">Add Ration Item</Link>
                </div>

                <div className="grid grid-cols-4 gap-x-6 gap-y-10">
                    {rationItems?.map((item) => (
                        <Card key={item._id} shadow="none" radius="sm" isPressable className="border">
                            <CardBody className="overflow-visible p-0 shadow rounded-lg">
                                <Image
                                    shadow="none"
                                    radius="sm"
                                    width="100%"
                                    alt=""
                                    className="w-full object-cover max-h-36"
                                    src={getImage(item.itemname)}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col items-start gap-3">
                                <h1 className="md:mb-2 font-semibold capitalize">{item.itemname}</h1>

                                <div className="flex items-center justify-between w-full">
                                    <h4 className="text-sm">Antyodaya Anna Yojana</h4>
                                    <p className="text-sky-700 tracking-wide text-sm">₹{item.prices.Antyodaya_Anna_Yojana}/kg</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <h4>Priority Household</h4>
                                    <p className="text-sky-700 tracking-wide">₹{item.prices.Priority_Household}/kg</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <h4>Above Poverty Line</h4>
                                    <p className="text-sky-700 tracking-wide">₹{item.prices.Above_Poverty_Line}/kg</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <h4>Below Poverty Line</h4>
                                    <p className="text-sky-700 tracking-wide">₹{item.prices.Below_Poverty_Line}/kg</p>
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