import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddCategory = () => {
    const { register, handleSubmit } = useForm();
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
                    // console.log(imgData.data.url);


                    const categories = {
                        categoryname: data.categoryname,
                        img: imgData.data.url,
                    };
                    //save information to the database 

                    fetch('http://localhost:5000/categories', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(categories)
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result);
                            Swal.fire({
                                text: 'Category has been added'
                            });
                            event.target.reset();
                        });

                }
            });
    };
    return (
        <div className='p-5 border rounded-md bg-white'>
            <form onSubmit={handleSubmit(handleSignIn)} noValidate="" action="" className="flex flex-col w-full rounded ng-untouched ng-pristine ng-valid">
                <label htmlFor="username" className="self-start text-xs font-semibold"> Category Name</label>
                <input {...register('categoryname', { required: 'Field is required' })} className="md:w-2/4 flex items-center text-black h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 border place text-base" placeholder='Write your category name' />
                <label className="label"> <span className="label-text text-white">Photo</span></label>
                <input type="file" {...register("img", {
                    required: 'Photo is required'
                })} className="input input-bordered md:w-2/4 flex text-black" />
                <button type="submit" className="rounded duration-500 ease-linear btn md:btn-md btn-sm hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white border-none w-full md:w-52 bg-primary mt-5 text-white">Add Now</button>
            </form>

        </div>
    );
};

export default AddCategory;