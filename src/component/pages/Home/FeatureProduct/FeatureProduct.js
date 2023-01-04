import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import product1 from '../../../../asset/FeatureProduct/product 1.jpg';
import './FeatureProduct.css';

const FeatureProduct = () => {
    return (
        <div className='w-11/12 mx-auto p-5 md:p-10'>
            <div>
                <h2 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>FEATURED PRODUCT</h2>
                <p className='text-gray-500 text-center text-lg md:px-40'>There are many variations of passages of brands available</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-evenly items-center py-5 hover'>
                <div className='border hover:shadow-lg duration-700'>
                    <figure>
                        <img className='w-full' src={product1} alt="" />
                    </figure>
                    <div className='pr-2 py-2'>
                        <div className='pt-2 pl-3 py-2'>
                            <h2 className='text-lg font-semibold uppercase'>samsung grand 6</h2>
                            <p className='text-gray-500 text-center text-xl font-semibold'>Price: $<span>125</span>.00</p>
                        </div>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li className='uppercase'>Ram/Rom:</li>
                            <li>4/64</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li className='uppercase'>Battery:</li>
                            <li>5000 <span>MAh</span></li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-2 px-3 py-2'>
                        <Link className='flex items-center'>
                            <span className='mr-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span>Save</span>
                        </Link>
                        <div>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='border hover:shadow-lg duration-700'>
                    <figure>
                        <img className='w-full' src={product1} alt="" />
                    </figure>
                    <div className='pr-2 py-2'>
                        <div className='pt-2 pl-3 py-2'>
                            <h2 className='text-lg font-semibold uppercase'>samsung grand 6</h2>
                            <p className='text-gray-500 text-center text-xl font-semibold'>Price: $<span>125</span>.00</p>
                        </div>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li className='uppercase'>Ram/Rom:</li>
                            <li>4/64</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li className='uppercase'>Battery:</li>
                            <li>5000 <span>MAh</span></li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-2 px-3 py-2'>
                        <Link className='flex items-center'>
                            <span className='mr-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span>Save</span>
                        </Link>
                        <div>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='border hover:shadow-lg duration-700'>
                    <figure>
                        <img className='w-full' src={product1} alt="" />
                    </figure>
                    <div className='pr-2 py-2'>
                        <div className='pt-2 pl-3 py-2'>
                            <h2 className='text-lg font-semibold uppercase'>samsung grand 6</h2>
                            <p className='text-gray-500 text-center text-xl font-semibold'>Price: $<span>125</span>.00</p>
                        </div>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li className='uppercase'>Ram/Rom:</li>
                            <li>4/64</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li className='uppercase'>Battery:</li>
                            <li>5000 <span>MAh</span></li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-2 px-3 py-2'>
                        <Link className='flex items-center'>
                            <span className='mr-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span>Save</span>
                        </Link>
                        <div>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='border hover:shadow-lg duration-700'>
                    <figure>
                        <img className='w-full' src={product1} alt="" />
                    </figure>
                    <div className='pr-2 py-2'>
                        <div className='pt-2 pl-3 py-2'>
                            <h2 className='text-lg font-semibold uppercase'>samsung grand 6</h2>
                            <p className='text-gray-500 text-center text-xl font-semibold'>Price: $<span>125</span>.00</p>
                        </div>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li className='uppercase'>Ram/Rom:</li>
                            <li>4/64</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li className='uppercase'>Battery:</li>
                            <li>5000 <span>MAh</span></li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-2 px-3 py-2'>
                        <Link className='flex items-center'>
                            <span className='mr-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span>Save</span>
                        </Link>
                        <div>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6 w-72 mx-auto'>
                <Link className='flex justify-between items-center hover:text-white text-xl bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition rounded text-white px-4 py-2 sm:py-3 mr-2 capitalize'>Explore all products
                    <span className='ml-3 mt-1'>
                        <BsArrowRight></BsArrowRight>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default FeatureProduct;