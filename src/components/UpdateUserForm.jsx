import React from 'react'
import Button from './Button';
import { Select, Option } from "@material-tailwind/react";
import useHandleUpdateForm from '../custom_hooks/useHandleUpdateForm';

const rationCard = [
    // { key: 0, value: "", text: "", disabled: true },
    { key: 1, value: "Antyodaya Anna Yojana", text: "Antyodaya Anna Yojana (AAY)", disabled: false },
    { key: 2, value: "Priority Household", text: "Priority Household (PHH)", disabled: false },
    { key: 3, value: "Above Poverty Line", text: "Above Poverty Line (APL)", disabled: false },
    { key: 4, value: "Below Poverty Line", text: "Below Poverty Line (BPL)", disabled: false },
]

const UpdateUserForm = ({ formData, handleInputs, userID, handleSelectChange }) => {
    const { handleSubmit, loading } = useHandleUpdateForm();

    return (
        <>
            <form method="POST" className="w-full grid md:grid-cols-3 gap-y-6 md:gap-y-12 md:gap-x-20" onSubmit={(e) => handleSubmit(e, formData, userID)}>
                <div>
                    <label htmlFor="name" className="text-[15px] md:text-base">Fullname</label>
                    <input
                        id="name"
                        name="fullname"
                        type="text"
                        required
                        value={formData.fullname}
                        onChange={handleInputs}
                        placeholder="Enter your fullname"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="text-[15px] md:text-base">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputs}
                        placeholder="Enter your email"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="text-[15px] md:text-base">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        required
                        value={formData.phone}
                        onChange={handleInputs}
                        placeholder="Enter your phone number"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                    />
                </div>

                <div>
                    <label htmlFor="RFID" className="text-[15px] md:text-base">RFID</label>
                    <input
                        id="RFID"
                        name="RFID"
                        type="text"
                        required
                        value={formData.RFID}
                        onChange={handleInputs}
                        placeholder="Enter RFID"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                    />
                </div>

                <div id="select-card" className="flex flex-col justify-center">
                    <p htmlFor="RCT" className="text-[15px] md:text-base mb-2">Ration Card Type</p>
                    <Select
                        id="RCT"
                        value={formData.rationCardType}
                        onChange={(val) => handleSelectChange(val)}
                        color="blue"
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                        }}
                        className="text-sm text-gray-900 md:text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary border-0"
                    >
                        {rationCard.map((type) => (
                            <Option value={type.value} key={type.key} disabled={type.disabled}>{type.text}</Option>
                        ))}
                    </Select>
                </div>

                <div>
                    <label htmlFor="TFM" className="text-[15px] md:text-base">Total Family Members</label>
                    <input
                        id="TFM"
                        name="familyMembers"
                        type="number"
                        min={0}
                        required
                        value={formData.familyMembers}
                        onChange={handleInputs}
                        placeholder="Enter total numbers of family members"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base"
                    />
                </div>

                <div className="md:col-span-3">
                    <label htmlFor="address" className="text-[15px] md:text-base">Address</label>
                    <textarea
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleInputs}
                        placeholder="Enter your full address [Appartment/locality/city/state/pincode]"
                        className="block min-h-24 md:min-h-0 mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary md:text-base placeholder:text-gray-400 placeholder:text-[15px]" />
                </div>

                <div className="md:col-span-3">
                    <Button value="Update" btn={true} />
                </div>
            </form>
        </>
    )
}

export default UpdateUserForm;