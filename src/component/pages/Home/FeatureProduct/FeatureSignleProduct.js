import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FeatureSignleProduct = ({ product }) => {
    const { productname, ramRom, img } = product;
    console.log(product);

    return (
        <>
            <div className='border hover:shadow-lg duration-700'>
                <figure className='flex justify-center items-center bg-[#ECECEA]'>
                    <img className='object-cover' src={img} alt="" />
                </figure>
                <div className='pr-2 py-2'>
                    <div className='pt-2 pl-3 py-2'>
                        <h2 className='text-base font-semibold uppercase'>{productname}</h2>
                        <p className='text-gray-500 text-center text-xl font-semibold'>Price: $<span>125</span>.00</p>
                    </div>
                    <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                        <li className='uppercase'>Ram/Rom:</li>
                        <li>{ramRom}</li>
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
        </>
    );
};

export default FeatureSignleProduct;