import { useGetDataContext } from "../context/GetDataContext";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const images = {
    Wheat: './wheat_bowl.jpg',
    Rice: './rice_bowl.jpg',
    Jowar: './jowar.png',
    Sugar: './sugar_bowl.jpg',
    Bajra: './bajra.png',
    Toor: './toor_dal.jpg'
}

const RationItems = () => {
    const { rationItems } = useGetDataContext();

    const getImage = (itemName) => {
        const image = Object.keys(images).find((key) =>
            itemName.toLowerCase().includes(key.toLowerCase())
        );

        return images[image];
    };

    return (
        <div className="mt-0 md:mt-10 w-full flex justify-center px-4 py-12 md:px-12 md:py-0">
            <div className="max-w-7xl flex flex-col gap-4">
                <h1 className="text-lg md:text-2xl font-bold">Ration Items</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 place-content-center md:mt-3">
                    {rationItems?.map((item) => (
                        <Card key={item._id} shadow="none" radius="sm" isPressable className="border">
                            <CardBody className="overflow-visible p-0 shadow rounded-lg">
                                <Image
                                    shadow="none"
                                    radius="sm"
                                    width="100%"
                                    alt=""
                                    className="w-full object-cover max-h-28 md:max-h-48"
                                    src={getImage(item.itemname)}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <h1 className="font-semibold capitalize">{item.itemname}</h1>
                                <p className="text-sky-700 tracking-wide">₹{item.prices.Antyodaya_Anna_Yojana}/kg</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <p className="text-xs italic text-gray-500/70">*Prices may differ based on the type of ration card.</p>
            </div>
        </div>
    )
}

export default RationItems;