import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="hero h-[400px] md:h-[750px]"
            style={{
                backgroundImage: `url("https://i.ibb.co/WHpnDHH/banner.jpg")`,
            }}
        >
            <div className="hero-overlay bg-gray-800 bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <p className="mb-5 mr-5 uppercase text-white">
                        Samsung grand 6
                    </p>
                    <h1 className="text-white mb-5 text-3xl md:text-6xl font-semibold md:px-72 uppercase">
                        New smart phones
                    </h1>
                    <Link to='/login' className="rounded duration-500 ease-linear btn md:btn-md btn-sm bg-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white border-none">Buy now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;