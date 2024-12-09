import { TbUserFilled } from 'react-icons/tb';
import { Card, CardBody } from '@nextui-org/react';
import { useGetDataContext } from '../context/GetDataContext';

const TotalUsers = () => {
    const { users } = useGetDataContext();

    return (
        <>
            <Card isPressable radius="sm" shadow="sm">
                <CardBody className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-gray-600 text-sm">Users</h1>
                            <p className="text-blue-gray-800 font-semibold tracking-wide mt-1.5 text-lg md:text-2xl">{users.length}</p>
                        </div>
                        <TbUserFilled className="text-4xl p-2 rounded-full bg-orange-50 text-orange-700" />
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm mt-2">
                            <span className="font-medium py-0.5 px-2 bg-green-50 text-green-700 rounded-[3px] mr-2">+4.567%</span>
                            Since last month
                        </p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default TotalUsers;