import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { authContext } from '../../../Context/AuthProvider';
import userImage from '../../../asset/user/user15.jpg';
import { BiCategory, BiAddToQueue } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";


const LeftSideBar = () => {
    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.error(error));
    };

    const dashboardItems = <>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <BsHouseDoor></BsHouseDoor></span>
            <Link to='/dashboard'>My Dashboard</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <BiCategory></BiCategory></span>
            <Link to='/dashboard/add-category'>Add Category</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <BiAddToQueue></BiAddToQueue></span>
            <Link to='/dashboard/add-product'>Add Product</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <MdProductionQuantityLimits></MdProductionQuantityLimits></span>
            <Link to='/dashboard/my-product'>My Product</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <AiOutlineLogout></AiOutlineLogout></span>
            <Link onClick={handleLogOut}>Sign Out</Link>
        </li>
    </>;
    return (
        <div className="w-full md:w-1/5 md:sticky h-screen top-20 right-0 rounded-lg ">
            <div className='bg-repeat relative w-full h-[120px] rounded-t '
                style={{ backgroundImage: `url('https://i.ibb.co/x8XcmKq/instructor-profile-bg.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
                <figure className='flex justify-center items-center absolute top-[50%] lg:left-[30%] left-[32%] md:left-[14%] bg-white p-1 rounded-full'>
                    {
                        user?.uid || user?.email || user?.photoURL ?
                            <>
                                <img className='rounded-full w-24 md:w-20' src={user?.photoURL} alt="" />
                            </>
                            :
                            <>
                                <img className='rounded-full lg:w-24 md:w-20' src={userImage} alt="" />
                            </>
                    }
                </figure>
            </div>
            <div className='pt-12 pb-5 border rounded-b bg-white'>
                <h2 className='text-xl font-bold'>{user?.displayName}</h2>
                <p className='text-base font-normal'>Admin</p>
                <Link className='mt-2 inline-block bg-primary text-white px-10 rounded py-2 hover:bg-gradient-to-r hover:from-secondary hover:to-primary'>Edit Profile</Link>
            </div>
            <div className='p-2 border pt-5 mt-5 rounded bg-white'>
                <h2 className='text-start text-xl font-bold text-primary uppercase'>Dashboard</h2>
                <ul>
                    {dashboardItems}
                </ul>
            </div>
        </div>
    );
};

export default LeftSideBar;