import { useGetDataContext } from '../context/GetDataContext';

const useOneOrderPerMonth = () => {
    const { userOrders } = useGetDataContext();

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear(); 

    const isOrderPlacedThisMonth = userOrders?.some((order) => {
        const orderDate = new Date(order.createdAt);
        return (
            orderDate.getMonth() + 1 === currentMonth &&
            orderDate.getFullYear() === currentYear
        );
    });

    return { isOrderPlacedThisMonth };
}

export default useOneOrderPerMonth;