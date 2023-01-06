import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../pages/About/About";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import AddCategory from "../pages/Dashboard/AddCategory";
import AddProduct from "../pages/Dashboard/AddProduct";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import MyProduct from "../pages/Dashboard/MyProduct";
import RightSideBar from "../pages/Dashboard/RightSideBar";
import UpdateMyProduct from "../pages/Dashboard/UpdateMyProduct";
import ErrrorElement from "../pages/ErrrorElement/ErrrorElement";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrrorElement></ErrrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about-us',
                element: <About></About>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact-us',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
                children: [
                    {
                        path: '/dashboard',
                        element: <RightSideBar></RightSideBar>
                    },
                    {
                        path: '/dashboard/add-category',
                        element: <AddCategory></AddCategory>
                    },
                    {
                        path: '/dashboard/add-product',
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: '/dashboard/my-product',
                        element: <MyProduct></MyProduct>
                    },
                    {
                        path: '/dashboard/product/edit/:id',
                        loader: ({ params }) => fetch(`https://mobile-mela-server-side.vercel.app/products/${params.id}`),
                        element: <UpdateMyProduct></UpdateMyProduct>
                    },
                ]
            }
        ]
    }
]);