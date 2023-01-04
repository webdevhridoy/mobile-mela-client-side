import React from 'react';
import Banner from './Banner/Banner';
import Bybrands from './ByBrands/Bybrands';
import FeatureProduct from './FeatureProduct/FeatureProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-neutral'>
                <FeatureProduct></FeatureProduct>
            </div>
            <div>
                <Bybrands></Bybrands>
            </div>
        </div>
    );
};

export default Home;