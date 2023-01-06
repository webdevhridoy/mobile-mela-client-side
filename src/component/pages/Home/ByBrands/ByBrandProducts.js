import React from 'react';
import { Link } from 'react-router-dom';

const ByBrandProducts = ({ brand, categories }) => {
    const { categoryname, img } = brand;
    console.log(brand);
    return (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-80">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-xl font-bold text-white">{categoryname}</h1>
                <h3 className="font-dmserif text-sm font-bold text-white">New Collections {brand.length}</h3>
                <Link to='/shop'>
                    <button className="text-white border border-white hover:border-secondary  px-2 py-1 hover:bg-gradient-to-r from-secondary to-primary hover:text-white translate-y-[100%]">View All</button>
                </Link>
            </div>
        </div>
    );
};

export default ByBrandProducts;