import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import './FeatureProduct.css';
import { useQuery } from '@tanstack/react-query';
import FeatureSignleProduct from './FeatureSignleProduct';

const FeatureProduct = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://mobile-mela-server-side-webdevhridoy.vercel.app/home-products');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='w-11/12 mx-auto p-5 md:p-10'>
            <div>
                <h2 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>FEATURED PRODUCT</h2>
                <p className='text-gray-500 text-center text-lg md:px-40'>There are many variations of passages of brands available</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-evenly items-center py-5 hover'>
                {
                    products?.map(product =>
                        <FeatureSignleProduct
                            key={product._id}
                            product={product}

                        >

                        </FeatureSignleProduct>
                    )
                }
            </div>
            <div className='py-6 w-72 mx-auto'>
                <Link to='/shop' className='flex justify-between items-center hover:text-white text-xl bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition rounded text-white px-4 py-2 sm:py-3 mr-2 capitalize'>Explore all products
                    <span className='ml-3 mt-1'>
                        <BsArrowRight></BsArrowRight>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default FeatureProduct;