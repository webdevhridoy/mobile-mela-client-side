import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { authContext } from '../../../Context/AuthProvider';
import Loader from '../../shared/Loader/Loader';

const AddProduct = () => {
    // useTitle('Add Products');
    const { register, handleSubmit } = useForm();
    const { user } = useContext(authContext);
    // const [isSeller, isSellerLoading] = useSeller(user?.email);
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://mobile-mela-server-side.vercel.app/categories');
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>;
    }

    const utcDate = new Date().toLocaleString();
    // const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleSignIn = (data, event) => {
        console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = 'https://api.imgbb.com/1/upload?key=a6f9b9970dcebe796e264ecdc5083f85';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const products = {
                        productname: data.productname,
                        categoryId: data.category,
                        description: data.description,
                        originalprice: data.originalprice,
                        saleprice: data.saleprice,
                        ramRom: data.ramRom,
                        img: imgData.data.url,
                        utcDate,
                        categoryName: categories.find(cat => cat._id === data.category)['categoryname'],
                        email: user?.email || 'Unregisterd'
                    };

                    // console.log(products);

                    // save information to the database;

                    fetch('https://mobile-mela-server-side.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result);
                            Swal.fire({
                                text: 'Product added succssfully'
                            });
                            event.target.reset();
                        });
                }
            });
    };
    return (
        <div className='p-5 border rounded-md bg-white'>
            <form onSubmit={handleSubmit(handleSignIn)} noValidate="" action="" className="flex flex-col w-full  p-5 rounded ng-untouched ng-pristine ng-valid">

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label htmlFor="username" className="self-start text-xs font-semibold"> Product Title</label>
                    <input {...register('productname', { required: 'Field is required' })} className="flex items-center text-black h-12 px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2" />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label htmlFor="password" className="self-start mt-3 text-xs font-semibold">Sale Price</label>
                    <input type='number' {...register('saleprice', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2" placeholder='$' />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label type='number' htmlFor="password" className="self-start mt-3 text-xs font-semibold">Original Price</label>
                    <input type='number' {...register('originalprice', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2" placeholder='$' />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label htmlFor="password" className="self-start mt-3 text-xsfont-semibold">Ram/Rom</label>
                    <select className='flex items-center h-12 text-black px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2' {...register('ramRom', { required: 'Field is required' })}>
                        <option className='text-black' > Select GB</option>
                        <option className='text-black' > 4/64</option>
                        <option className='text-black' > 4/128</option>
                        <option className='text-black' > 8/128</option>
                        <option className='text-black' > 8/256</option>
                    </select>
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label type='number' htmlFor="password" className="self-start mt-3 text-xs font-semibold">Select Category</label>
                    <select className='flex items-center h-12 text-black px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2' {...register('category', { required: 'Field is required' })}>

                        {
                            categories.map(categories =>

                                <option className='text-black'

                                    key={categories._id}
                                    value={categories._id}
                                > {categories.categoryname}</option>
                            )
                        }


                    </select>
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label className="label"> <span className="self-start text-xs font-semibold">Photo</span></label>
                    <input type="file" {...register("img", {
                        required: 'Photo is required'
                    })} className="input input-bordered w-full max-w-xs text-black" />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label htmlFor="password" className="self-start mt-3 text-xs font-semibold">Description</label>
                    <textarea minLength={140} {...register('description', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2 mb-2 border">

                    </textarea>
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <button type="submit" className="hover:text-white text-xl bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition rounded text-white px-4 py-2 sm:py-3 mr-2 capitalize w-full">Add Now</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;