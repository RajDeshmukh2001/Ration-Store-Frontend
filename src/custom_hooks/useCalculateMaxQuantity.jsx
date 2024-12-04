import { useAuthContext } from '../context/AuthContext';

const useCalculateMaxQuantity = () => {
    const { accountDetails } = useAuthContext();

    let maxQuantity = 0;
    const type = accountDetails?.rationCardType;
    const totalFamilyMembers = accountDetails?.familyMembers;

    if (type === 'Priority Household') {
        maxQuantity = totalFamilyMembers * 5;
    } else if (type === 'Above Poverty Line') {
        maxQuantity = totalFamilyMembers * 3;
    } else if (type === 'Antyodaya Anna Yojana') {
        maxQuantity = 35;
    } else {
        maxQuantity = 20;
    }

    return { maxQuantity }
}

export default useCalculateMaxQuantity;