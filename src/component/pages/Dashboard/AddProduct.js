import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    // useTitle('Add Products');
    const { register, handleSubmit } = useForm();
    const { user } = useContext(authContext);
    // const [isSeller, isSellerLoading] = useSeller(user?.email);
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const navigate = useNavigate();


    // const { data: categories = [], isLoading } = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: async () => {
    //         const res = await fetch('https://listit-classified-server.vercel.app/categories');
    //         const data = res.json();
    //         return data;
    //     }
    // });

    // if (isLoading) {
    //     return <Loader></Loader>;
    // }

    // const utcDate = new Date().toLocaleString();
    // const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleSignIn = (data) => {
        // console.log(data);
        // const image = data.img[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         // console.log(imgData);
        //         if (imgData.success) {
        //             console.log(imgData.data.url);


        //             const products = {
        //                 sellername: data.sellername,
        //                 productname: data.productname,
        //                 categoryId: data.category,
        //                 condition: data.condition,
        //                 description: data.description,
        //                 location: data.location,
        //                 mobile: data.mobile,
        //                 originalprice: data.originalprice,
        //                 saleprice: data.saleprice,
        //                 yearsofuse: data.yearsofuse,
        //                 yearsofpurchase: data.yearsofpurchase,
        //                 img: imgData.data.url,
        //                 utcDate,
        //                 categoryName: categories.find(cat => cat._id === data.category)['categoryname'],
        //                 email: user?.email || 'Unregisterd'
        //             };

        //             // console.log(products);

        //             // save information to the database;

        //             fetch('https://listit-classified-server.vercel.app/products', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json',
        //                 },
        //                 body: JSON.stringify(products)
        //             })
        //                 .then(res => res.json())
        //                 .then(result => {
        //                     // console.log(result);
        //                     navigate('/dashboard/myproducts');
        //                     Swal.fire({
        //                         text: 'Product added succssfully'
        //                     });
        //                 });

        //         }
        //     });


    };
    return (
        <div className='p-5 border rounded-md bg-white'>
            <form onSubmit={handleSubmit(handleSignIn)} novalidate="" action="" className="flex flex-col w-full  p-5 rounded ng-untouched ng-pristine ng-valid">

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label for="username" className="self-start text-xs font-semibold"> Product Name</label>
                    <input {...register('productname', { required: 'Field is required' })} className="flex items-center text-black h-12 px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2" />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label for="password" className="self-start mt-3 text-xs font-semibold">Sale Price</label>
                    <input type='number' {...register('saleprice', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2" placeholder='$' />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label type='number' for="password" className="self-start mt-3 text-xs font-semibold">Original Price</label>
                    <input {...register('originalprice', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2" placeholder='$' />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label type='number' for="password" className="self-start mt-3 text-xs font-semibold">Year of purchase</label>
                    <input {...register('yearsofpurchase', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2" />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label type='number' for="password" className="self-start mt-3 text-xs font-semibold">Select Category</label>
                    <select className='flex items-center h-12 text-black px-4 mt-1 mb-2 border rounded focus:outline-none focus:ring-2' {...register('category', { required: 'Field is required' })}>

                        {/* {
                        categories.map(categories =>

                            <option className='text-black'

                                key={categories._id}
                                value={categories._id}
                            > {categories.categoryname}</option>
                        )
                    } */}


                    </select>
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label className="label"> <span className="label-text text-white">Photo</span></label>
                    <input type="file" {...register("img", {
                        required: 'Photo is required'
                    })} className="input input-bordered w-full max-w-xs text-black" />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <label for="password" className="self-start mt-3 text-xs font-semibold">Description</label>
                    <input minLength={140} {...register('description', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />
                </div>

                <div className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                    <button type="submit" className="flex items-center justify-center bg-white text-black mt-5 h-12 ">Add Now</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;