import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const MyProduct = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='p-5 border rounded-md bg-white'>
            <h2 className='text-start text-xl font-bold text-primary pb-5 uppercase'>Best Selling Phones</h2>
            <hr className='pb-5' />
            <div className="md:overflow-x overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>

                                <tr key={product._id}
                                    product={product}>
                                    <th>{index + 1}</th>
                                    <td>{product.productname}</td>
                                    <td>${product.saleprice}</td>
                                    <td>
                                        <Link to={`/dashboard/product/edit/${product._id}`} className='bg-primary px-2 py-1 text-white rounded hover:bg-gradient-to-r hover:from-secondary hover:to-primary'>Edit</Link>
                                    </td>
                                    <td>
                                        <Link className='bg-secondary px-2 py-1 text-white rounded hover:bg-gradient-to-r hover:from-secondary hover:to-primary'>Delete</Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;