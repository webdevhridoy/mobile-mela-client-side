import React from 'react';

const Feature = ({ feature }) => {
    const { title, text, numbers } = feature;
    return (
        <div className='shadow-current text-start p-8 bg-white rounded-md hover:shadow-lg duration-500'>
            <h5 className='bg-secondary inline-block py-0.5 px-1 rounded text-white mb-3'>{title}</h5>
            <h2 className='text-2xl text-gray-900 font-bold'>{numbers}</h2>
            <p className='text-gray-500 text-sm'>{text}</p>
        </div>
    );
};

export default Feature;