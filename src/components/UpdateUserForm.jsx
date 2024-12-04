import React from 'react'
import useHandleUpdateForm from '../custom_hooks/useHandleUpdateForm';
import { Spinner } from '@nextui-org/react';

const rationCard = [
    { key: 0, value: "", text: "", disabled: true },
    { key: 1, value: "Antyodaya Anna Yojana", text: "Antyodaya Anna Yojana (AAY)", disabled: false },
    { key: 2, value: "Priority Household", text: "Priority Household (PHH)", disabled: false },
    { key: 3, value: "Above Poverty Line", text: "Above Poverty Line (APL)", disabled: false },
    { key: 4, value: "Below Poverty Line", text: "Below Poverty Line (BPL)", disabled: false },
]

const UpdateUserForm = ({ formData, handleInputs, userID }) => {
    const { handleSubmit, loading } = useHandleUpdateForm();

    return (
        <>
            <form method="POST" className="grid grid-cols-3 gap-y-12 gap-x-20" onSubmit={(e) => handleSubmit(e, formData, userID)}>
                <div>
                    <label htmlFor="name">Fullname</label>
                    <input
                        id="name"
                        name="fullname"
                        type="text"
                        required
                        value={formData.fullname}
                        onChange={handleInputs}
                        placeholder="Enter your fullname"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 md:text-base"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputs}
                        placeholder="Enter your email"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 md:text-base"
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        required
                        value={formData.phone}
                        onChange={handleInputs}
                        placeholder="Enter your phone number"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 md:text-base"
                    />
                </div>

                <div>
                    <label htmlFor="RFID">RFID</label>
                    <input
                        id="RFID"
                        name="RFID"
                        type="text"
                        required
                        value={formData.RFID}
                        onChange={handleInputs}
                        placeholder="Enter RFID"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 md:text-base"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <label htmlFor="RCT">Ration Card Type</label>
                    <select
                        id="RCT"
                        name="rationCardType"
                        value={formData.rationCardType}
                        onChange={handleInputs}
                        className="mt-2 rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 md:text-base"
                    >
                        {rationCard.map((type) => (
                            <option value={type.value} key={type.key} disabled={type.disabled}>{type.text}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="TFM">Total Family Members</label>
                    <input
                        id="TFM"
                        name="familyMembers"
                        type="number"
                        min={0}
                        required
                        value={formData.familyMembers}
                        onChange={handleInputs}
                        placeholder="Enter total numbers of family members"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[15px] focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 md:text-base"
                    />
                </div>

                <div className="col-span-3">
                    <label htmlFor="address">Enter your full address</label>
                    <textarea
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleInputs}
                        placeholder="Enter your full address [Appartment/locality/city/state/pincode]"
                        className="block mt-2 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 md:text-base placeholder:text-gray-400 placeholder:text-[15px]" />
                </div>

                <button type="submit" className="col-span-3 flex w-full justify-center rounded-md px-3 py-1.5 font-medium bg-sky-700 border-2 border-sky-700 text-white hover:bg-transparent hover:text-sky-700 transition duration-500 ease-in-out">
                    {loading ? <Spinner size="sm" /> : "Update"}
                </button>
            </form>
        </>
    )
}

export default UpdateUserForm;