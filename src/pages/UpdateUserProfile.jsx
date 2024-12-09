import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import UpdateUserForm from '../components/UpdateUserForm';

const UpdateUserProfile = () => {
    const { accountDetails, loggedIn } = useAuthContext();

    const [formData, setFormData] = useState({
        fullname: accountDetails?.fullname || '',
        email: accountDetails?.email || '',
        phone: accountDetails?.phone || '',
        RFID: accountDetails?.RFID || '',
        rationCardType: accountDetails?.rationCardType || '',
        familyMembers: accountDetails?.familyMembers || '',
        address: accountDetails?.address || '',
    });

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setFormData({ ...formData, [name]: value });
    }

    const handleSelectChange = (value) => {
        setFormData({ ...formData, rationCardType: value });
    };

    console.log(formData);

    const userID = accountDetails?._id?.toString();

    return (
        <>
            {!loggedIn && <Navigate to="/login" replace />}
            <div className="w-full flex justify-center px-4 md:px-12">
                <div className="my-10 max-w-7xl w-full flex flex-col gap-8 border p-6 md:py-8 md:px-10 rounded-md bg-white">
                    <h2 className="md:text-xl font-semibold text-primary">Update Profile</h2>

                    <UpdateUserForm
                        formData={formData}
                        handleInputs={handleInputs}
                        userID={userID}
                        handleSelectChange={handleSelectChange}
                    />
                </div>
            </div>
        </>
    )
}

export default UpdateUserProfile;