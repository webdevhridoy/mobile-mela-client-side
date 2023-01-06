import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ByBrandProducts from './ByBrandProducts';

const Bybrands = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://mobile-mela-server-side.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className="w-11/12 mx-auto p-5 md:p-10">
            <div>
                <h2 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>BY BRANDS</h2>
                <p className='text-gray-500 text-center text-lg md:px-40'>There are many variations of passages of brands available</p>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 py-5'>
                {
                    categories.map(brand =>
                        <ByBrandProducts
                            key={brand._id}
                            brand={brand}
                            categories={categories}
                        ></ByBrandProducts>
                    )
                }
            </div>
        </div>
    );
};

export default Bybrands;