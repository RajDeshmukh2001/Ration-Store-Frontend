import { useState } from "react";
import { Navigate } from "react-router-dom";
import PlaceOrder from "../components/PlaceOrder";
import AddQuantity from "../components/AddQuantity";
import { useAuthContext } from "../context/AuthContext";
import useOneOrderPerMonth from "../custom_hooks/useOneOrderPerMonth";
import { Chip } from "@nextui-org/react";

const OrderItems = () => {
    const [rationInputValues, setRationInputValues] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);
    const { isOrderPlacedThisMonth } = useOneOrderPerMonth();
    const { loggedIn, accountDetails } = useAuthContext();

    return (
        <>
            {!loggedIn && <Navigate to="/login" replace />}
            {(loggedIn && !accountDetails?.RFID) && <Navigate to="/update_profile" replace />}

            <div className="md:mt-2 flex min-h-full justify-center px-4 py-8 md:py-12 lg:px-8">
                {isOrderPlacedThisMonth
                    ?
                    <>
                        <Chip color="warning" variant="bordered" radius="sm" className="px-4 py-5 md:py-8 text-[15px] md:text-lg">An order has already been placed this month.</Chip>
                    </>
                    :
                    <>
                        <div className="w-full max-w-7xl grid md:grid-cols-3 gap-8 md:gap-10">
                            <AddQuantity
                                rationInputValues={rationInputValues}
                                totalQuantity={totalQuantity}
                                setRationInputValues={setRationInputValues}
                                setTotalQuantity={setTotalQuantity}
                            />

                            <PlaceOrder
                                rationInputValues={rationInputValues}
                                totalQuantity={totalQuantity}
                            />
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default OrderItems;