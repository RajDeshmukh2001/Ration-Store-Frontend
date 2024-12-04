import './App.css';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Error from './pages/Error';
import Login from './pages/Login';
import Layout from './pages/Layout';
import MyOrders from './pages/MyOrders';
import Register from './pages/Register';
import Users from './pages/admin/Users';
import Orders from './pages/admin/Orders';
import OrderItems from './pages/OrderItems';
import UserProfile from './pages/UserProfile';
import AdminLogin from './pages/admin/AdminLogin';
import ManageRation from './pages/admin/ManageRation';
import AddRationItem from './pages/admin/AddRationItem';
import UpdateUserProfile from './pages/UpdateUserProfile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleUser from './pages/admin/SingleUser';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <UserProfile />
            },
            {
                path: '/update_profile',
                element: <UpdateUserProfile />
            },
            {
                path: '/order',
                element: <OrderItems />
            },
            {
                path: '/my_orders',
                element: <MyOrders />
            },
            {
                path: '/ration',
                element: <ManageRation />
            },
            {
                path: '/ration/add_ration_item',
                element: <AddRationItem />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/users/:id',
                element: <SingleUser />
            },
            {
                path: '/orders',
                element: <Orders />
            },
        ]
    },
    {
        path: '/admin_login',
        element: <AdminLogin />
    },
    {
        path: '*',
        element: <Error />,
    }
])

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Toaster position="bottom-right" expand={false} richColors closeButton />
            <RouterProvider router={router} />
        </div>
    )
}

export default App;