import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../asset/logo/Mobilemela.png';
import './Header.css';

const Header = () => {
    const menuItems = <>
        <li>
            <Link className='text-md font-semibold  ' to='/'>Home</Link>
        </li>
        <li>
            <Link className='text-md font-semibold' to='/about-us'>About Us</Link>
        </li>
        <li>
            <Link className='text-md font-semibold  ' to='/shop'>Shop</Link>
        </li>
        <li >
            <Link className='text-md font-semibold  ' to='/blog'>Blog</Link>
        </li>
        <li>
            <Link className='text-md font-semibold  ' to='/contact-us'>Conact Us</Link>
        </li>
    </>;
    return (
        <div className="navbar bg-base-100 md:w-11/12 md:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-62' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal p-0 menus">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end ">
                <Link to='/login' className="text-white rounded duration-700 ease-linear btn md:btn-md btn-sm bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary">Get started</Link>
            </div>
        </div>
    );
};

export default Header;