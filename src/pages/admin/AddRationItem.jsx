import axios from 'axios';
import { toast } from 'sonner';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetDataContext } from '../../context/GetDataContext';
import Button from '../../components/Button';
import { useAuthContext } from '../../context/AuthContext';

const rationCard = [
    { key: 1, text: "Antyodaya Anna Yojana (AAY)", value: "AAY" },
    { key: 2, text: "Priority Household (PHH)", value: "PHH" },
    { key: 3, text: "Above Poverty Line (APL)", value: "APL" },
    { key: 4, text: "Below Poverty Line (BPL)", value: "BPL" },
]

const AddRationItem = () => {
    const { loggedIn } = useAuthContext();
    const { getRationItems } = useGetDataContext();
    const navigate = useNavigate();
    const [items, setItems] = useState({
        itemname: '',
        AAY: '',
        PHH: '',
        APL: '',
        BPL: '',
    });

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setItems({ ...items, [name]: value });
    }

    const handleAddRation = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/ration/ration_item`, items);
            if (res.status === 200) {
                toast.success(res.data.message);
                getRationItems();
                navigate('/ration');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            {!loggedIn && <Navigate to="/admin_login" replace />}
            <div className="w-full flex flex-col gap-10 px-4 py-8 md:py-10 md:mx-16">
                <div className="flex flex-col items-center ">
                    <div className="w-full border p-5 rounded-md bg-white md:max-w-max md:py-6 lg:px-8">
                        <h1 className="text-lg md:text-xl font-semibold text-primary">Add Ration Item</h1>

                        <form method="POST" className="mt-10 flex flex-col gap-10" onSubmit={handleAddRation}>
                            <div className="w-full flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
                                <label htmlFor="name" className="text-[15px] md:text-base">Item Name: </label>
                                <input
                                    id="name"
                                    name="itemname"
                                    type="text"
                                    required
                                    value={items.itemname}
                                    onChange={handleInputs}
                                    placeholder="Enter the ration item name"
                                    className="block md:min-w-96 rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-[15px] md:text-base">Prices <span className="text-sm text-gray-600 italic">(per kg)</span>  :</h2>
                                <div className="flex flex-col md:flex-row gap-10 md:items-center">
                                    {rationCard.map((type) => (
                                        <div key={type.key}>
                                            <label htmlFor={type.value} className="text-[15px] text-gray-700 italic">{type.text}</label>
                                            <input
                                                id={type.value}
                                                name={type.value}
                                                type="text"
                                                required
                                                value={items[type.value]}
                                                onChange={handleInputs}
                                                placeholder="Enter the ration item name"
                                                className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button value="Add Item" btn={true} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRationItem;