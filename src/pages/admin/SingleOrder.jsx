import { useEffect } from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useGetDataContext } from '../../context/GetDataContext';
import { Avatar, Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react';

const images = {
    Wheat: '/wheat_bowl.jpg',
    Rice: '/rice_bowl.jpg',
    Jowar: '/jowar.png',
    Sugar: '/sugar_bowl.jpg',
    Bajra: '/bajra.png',
    Toor: '/toor_dal.jpg'
}

const SingleOrder = () => {
    const { id } = useParams();
    const { singleOrder, getSingleOrder } = useGetDataContext();

    useEffect(() => {
        getSingleOrder(id);
    }, []);

    const getImage = (itemName) => {
        const image = Object.keys(images).find((key) =>
            itemName.toLowerCase().includes(key.toLowerCase())
        );

        return images[image];
    };

    return (
        <div className="w-full px-4 py-8 md:py-10 md:mx-16">
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
                <div className="md:basis-3/5">
                    <Card className="p-1.5 md:p-2 h-full">
                        <CardHeader className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h4 className="text-sm">Order ID: #{singleOrder?.order?._id}</h4>
                            </div>
                            <div className="w-full flex flex-row-reverse items-center justify-between gap-5 md:flex-row md:w-max ">
                                <Chip
                                    variant="flat"
                                    color={singleOrder?.order?.status === 'pending' ? "primary" : "success"}
                                    className="font-medium capitalize text-sm"
                                >
                                    {singleOrder?.order?.status}
                                </Chip>
                                <h4 className="text-sm">{singleOrder?.order?.createdAt && format(new Date(singleOrder?.order?.createdAt), 'dd MMM yyyy')}</h4>
                            </div>
                        </CardHeader>

                        <Divider />

                        <CardBody className="flex flex-col gap-4">
                            {singleOrder?.order?.orderItems?.map((item) => (
                                <div key={item._id} className="grid grid-cols-3 items-center">
                                    <div className="flex items-center gap-2">
                                        <Avatar radius="sm" src={getImage(item.item)} />
                                        <div className="flex flex-col gap-1">
                                            <h2 className="font-medium text-[15px] md:text-base">{item.item}</h2>
                                            <p className="text-gray-600 text-sm">{item.itemPrice}/kg</p>
                                        </div>
                                    </div>
                                    <h4 className="justify-self-end text-[15px] md:text-base">{item.itemTotalQuantity} kg</h4>
                                    <h4 className="justify-self-end text-[15px] md:text-base">₹ {item.itemTotalPrice}</h4>
                                </div>
                            ))}

                            <Divider />

                            <div className="grid grid-cols-3 items-center">
                                <h2 className="text-[15px] md:text-base">
                                    Maximum Quantity: 
                                    <span className="font-medium ml-2">{singleOrder?.order?.maxQuantity} kg</span> 
                                </h2>
                                <h4 className="justify-self-end font-medium text-[15px] md:text-base">{singleOrder?.order?.totalQuantity} kg</h4>
                                <h4 className="justify-self-end font-medium text-[15px] md:text-base">₹ {singleOrder?.order?.totalPrice}</h4>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="md:basis-2/5">
                    <Card className="p-1.5 md:p-2 h-full">
                        <CardHeader>
                            <div className="flex flex-col gap-1">
                                <h2 className="font-medium text-[15px] md:text-base">{singleOrder?.user?.fullname}</h2>
                                <div className="flex items-center gap-1 text-[13px] md:text-sm text-gray-600">
                                    <h4>{singleOrder?.user?.email}</h4>
                                    <span> | </span>
                                    <h4>+91 {singleOrder?.user?.phone}</h4>
                                </div>
                            </div>
                        </CardHeader>

                        <Divider />

                        <CardBody className="flex flex-col justify-between gap-4 md:gap-0">
                            <div className="flex gap-2.5">
                                <h4 className="text-gray-700 text-[15px]">RFID:</h4>
                                <h2 className="font-medium text-[15px]">{singleOrder?.user?.RFID}</h2>
                            </div>
                            <div className="flex gap-2.5">
                                <h4 className="text-gray-700 text-[15px]">Ration Card:</h4>
                                <h2 className="font-medium text-[15px]">{singleOrder?.user?.rationCardType}</h2>
                            </div>
                            <div className="flex gap-2.5">
                                <h4 className="text-gray-700 text-[15px]">Family Members:</h4>
                                <h2 className="font-medium text-[15px]">{singleOrder?.user?.familyMembers}</h2>
                            </div>
                            <div className="flex gap-2.5 flex-wrap">
                                <h4 className="text-gray-700 text-[15px]">Address:</h4>
                                <h2 className="font-medium text-[15px]">{singleOrder?.user?.address}</h2>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

/*
<div className="grid grid-cols-3 gap-x-6">
    <div className="col-span-2"></div>
    <div className="col-span-1"></div>
</div>
*/

export default SingleOrder;