import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase.init';

const AddProduct = () => {
    const imageStorageKey = '2c213338298945009a5f44b7b85d3b4f';

    //Form Control & Submit
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    // console.log(user.email);

    const onSubmit = formInfo => {

        const { name, description, quantity, price, category, minOrder } = formInfo;

        // const discount = ((originalPrice - discountPrice) / originalPrice) * 100;
        // const discountRoundPrice = JSON.stringify(Math.round(discount))
        // // console.log('discount: ', discount);

        //imageBB api
        const image = formInfo.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url1 = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url1, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imageUrl = result.data.display_url;
                    const product = {
                        // email: user.email,
                        name: name,
                        description: description,
                        imgUrl: imageUrl,
                        category: category,
                        price: price,
                        available: quantity,
                        minOrder: minOrder

                    }
                    console.log('addProduct', product);

                    const url = `http://localhost:5000/addProduct`;

                    fetch(url, {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data) {
                                toast.success(`Product Added to Database and My item page`)
                            }
                            else {
                                toast.error(`Already have and with same Name!`)
                            }
                            // navigate(`/produc`);
                        });
                }
            });


        reset();



    }
    return (
        <div>
            <div className="py-10 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">ADD PRODUCT</div>

            <div className='flex  justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>


                            {/* Input Product Name */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder=" Enter Product Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Product Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red">{errors.name.message}</span>}
                                </label>
                            </div>

                            {/* Input Product Description */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="text"
                                    placeholder=" Enter Product Description"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Product Description is Required'
                                        },
                                        pattern: {
                                            value: true,
                                            message: 'Provide Product Description'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red">{errors.description.message}</span>}
                                    {errors.description?.type === 'pattern' && <span className="label-text-alt text-red">{errors.description.message}</span>}
                                </label>
                            </div>

                            {/* Input product originalPrice  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    placeholder=" Enter product Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Product Price is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red">{errors.price.message}</span>}
                                </label>
                            </div>

                            {/* Input minimum order */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    placeholder=" Enter minimum order"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("minOrder", {
                                        required: {
                                            value: true,
                                            message: 'Minimum Quantity is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red">{errors.minOrder.message}</span>}
                                </label>
                            </div>

                            {/* Input Available Product Quantity*/}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    placeholder=" Enter Available Product Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: `Available Product Quantity Required`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red">{errors.quantity.message}</span>}
                                </label>
                            </div>

                            {/* img uplaod */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="file"
                                    placeholder=" Enter Available Product Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red">{errors.image.message}</span>}
                                </label>
                            </div>

                            {/* Sbmit Button */}
                            <input className='btn bg-base w-full max-w-xs text-white' type="submit" value="Upload Shoe" />
                        </form>

                    </div>
                    <Link className='py-3 bg-red flex justify-center px-2 text-white font-bold'
                        to='/myitems'>Manage Items
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;