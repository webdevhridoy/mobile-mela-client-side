import { useQuery } from '@tanstack/react-query';
import React from 'react';
import FeatureSignleProduct from '../Home/FeatureProduct/FeatureSignleProduct';

const Shop = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://mobile-mela-server-side.vercel.app/products');
            const data = await res.json();
            return data;
        }
    });
    console.log(products);
    return (
        <div className='w-11/12 mx-auto p-5 md:p-10'>
            <div>
                <h2 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>Welcom to our Shop</h2>
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
        </div>
    );
};

export default Shop;