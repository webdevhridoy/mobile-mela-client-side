import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import AddCategory from "../pages/Dashboard/AddCategory";
import AddProduct from "../pages/Dashboard/AddProduct";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import RightSideBar from "../pages/Dashboard/RightSideBar";
import ErrrorElement from "../pages/ErrrorElement/ErrrorElement";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

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
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
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
                ]
            }
        ]
    }
]);