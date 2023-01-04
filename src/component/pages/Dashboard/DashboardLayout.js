import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';

const DashboardLayout = () => {
    return (
        <div className='bg-neutral'>
            <div className="flex flex-col md:flex-row justify-between gap-5 w-11/12 mx-auto p-5 md:p-10">
                <LeftSideBar></LeftSideBar>
                <div className="w-full md:w-4/5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;