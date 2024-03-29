import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import './ProductStyle.css';
import Loading from '../Shared/Loading';
import auth from '../../Firebase.init';

const ProductDetails = () => {

    const [user] = useAuthState(auth)
    const userEmail = user.reloadUserInfo.email;

    const { register, formState: { errors }, handleSubmit } = useForm();
    // const navigate = useNavigate()
    const { productID } = useParams();
    const { isLoading, error, data: product, refetch } = useQuery(['productData'], () =>
        fetch(`https://lafz-server.onrender.com/allProducts/${productID}`).then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message
    // console.log('Product:', product)

    const { _id, name, description, available, price, imgUrl, minOrder, category } = product

    // restockQuantity
    const onSubmit = formInfo => {
        const { quantity } = formInfo;
        const totalPrice = quantity * price;

        const userOrder = {
            name: name,
            email: userEmail,
            orderQuantity: quantity,
            imgUrl: imgUrl,
            price: totalPrice,
        }
        console.log('userOrder', userOrder);

        const url = `https://lafz-server.onrender.com/userOrder`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(userOrder),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                toast.success('Order place successfully')
                refetch()
            });


        const url1 = `https://lafz-server.onrender.com/allProducts/${_id}`;
        // console.log(url1);
        const newStocks = available - quantity;
        console.log('newStocks', newStocks);

        const product = {
            name: name,
            description: description,
            minOrder: minOrder,
            price: price,
            available: newStocks,
            imgUrl: imgUrl,
        }
        console.log('Update product', product);

        //put updateOne
        fetch(url1, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                refetch()
            });
    }


    return (
        <>
            <section class="text-gray-600 py-4 body-font overflow-hidden">
                <div class="container px-5 mx-auto ">
                    <div class="lg:w-4/5 mx-auto image-box  flex  flex-wrap ">

                        <img alt="ecommerce" class="productDetailsImg border-base lg:w-1/2 w-full lg:h-auto  object-contain object- rounded"
                            src={imgUrl} />

                        <div class=" border-gray-100 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <p class="text-sm pb-2 title-font text-gray-500 uppercase tracking-widest">{category}</p>
                            <h1 class=" text-3xl title-font font-medium">{name}</h1>
                            <p className="mb-3">{description} </p>

                            {/* Review section */}
                            <div class="flex mb-2 flex-co ">
                                <span class="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                </span>
                                <span class=" ml-3 text-gray-600">4 Reviews</span>

                            </div>

                            {/* discount percentage */}
                            {/* <p class="text-sm pb-2 title-font text-green uppercase tracking-widest">Save: {discountRoundPrice}%</p> */}


                            {/* price   */}
                            <div class="flex mb-2 items-center ">
                                {/* <span style={{ color: '#4c4c4cc7' }} class="title-font pr-4 line-through font-medium text-xl"><span>$</span>{originalPrice}</span> */}
                                <span class="title-font font-medium text-3xl  text-base">{price}
                                    <span className='text-lg text-black'> TK</span></span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

                            </div>

                            {/* Availability */}
                            <h1 className=" text-2xl inline-block mr-3">Availability: </h1>
                            <span className='text-md text-red'>{available} left in stock</span>

                            {/* color and size section      */}
                            <div class="flex flex-row item-start mt-2 items-center   mb-5">
                                <div class="flex items-center">
                                    <span class="mr-3">Color</span>
                                    <button class="border-2 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 bg-blue ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 bg-red ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                            </div>

                            {/* update quantity   */}
                            <div className="flex-col flex">
                                <p className="mb-3"> Enter your buying quantity</p>
                                <form className="flex  " onSubmit={handleSubmit(onSubmit)}>

                                    {/* Input discountPrice Price */}
                                    <div className="form-control w-24 max-w-xs">
                                        <input
                                            defaultValue={minOrder}
                                            min={minOrder}
                                            max={available}
                                            type="number"
                                            placeholder="Quantity"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("quantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Product quantity is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red">{errors.quantity.message}</span>}
                                        </label>
                                    </div>

                                    {/* Sbmit Button */}
                                    <input className='btn ml-3  bg-base  text-white' type="submit" value="Place Order" />
                                </form>

                                {/* <button onClick={() => deliveryProduct()} className="btn my-3 bg-blue ">PLACE DELIVERY</button> */}
                                <Link to="/dashboard" className="btn mb-3 bg-base1 ">My orders</Link>
                                <Link to="/shop" className="btn mb-3 bg-base1 ">View all products</Link>
                                {/* <Link to='/manageshoes' className="btn bg-red"> Manage Inventory</Link> */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;