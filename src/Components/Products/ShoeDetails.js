import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import './ProductStyle.css'


const ShoeDetails = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const navigate = useNavigate()
    const { productID } = useParams();
    const { isLoading, error, data: product, refetch } = useQuery(['shoeData'], () =>
        fetch(`https://pure-shore-88854.herokuapp.com/allshoes/${productID}`).then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message
    // console.log(products)
    const { name, brand, description, available, gender, originalPrice, discountPrice, imgUrl, discountRoundPrice } = product

    // restockQuantity
    const onSubmit = formInfo => {
        const input = JSON.parse(formInfo.restockQuantity)
        const restockQuantity = input + JSON.parse(available)
        console.log(restockQuantity)

        const product = {
            name: name,
            description: description,
            brand: brand,
            gender: gender,
            originalPrice: originalPrice,
            discountPrice: discountPrice,
            available: restockQuantity,
            imgUrl: imgUrl,
            discountRoundPrice: discountRoundPrice,
            // review: review,
        }
        // console.log('tasklist', product);


        const url = `https://pure-shore-88854.herokuapp.com/allshoes/${productID}`;

        //put updateOne
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                toast.success('Product Quantity updated successfully')
                refetch()
            });
        reset()
    }

    const deliveryBtnDecrease = available - 1;
    // console.log(deliveryBtnDecrease);

    // delivey btn decrease product quantity by one  
    const deliveryProduct = () => {

        const product = {
            name: name,
            description: description,
            brand: brand,
            gender: gender,
            originalPrice: originalPrice,
            discountPrice: discountPrice,
            available: deliveryBtnDecrease,
            imgUrl: imgUrl,
            discountRoundPrice: discountRoundPrice,
            // review: review,
        }
        console.log('tasklist', product);


        const url = `https://pure-shore-88854.herokuapp.com/allshoes/${productID}`;

        //put updateOne
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                toast.success('Product Quantity updated successfully')
                refetch()
            });
        reset()
    }

    // const manageInventory = () => {
    //     navigate('/manageshoes')
    // }
    // const addItemPage = () => {
    //     navigate('/addShoe')
    // }
    return (
        <>
            <section class="text-gray-600 py-4 body-font overflow-hidden">
                <div class="container px-5 mx-auto ">
                    <div class="lg:w-4/5 mx-auto image-box  flex  flex-wrap ">

                        <img alt="ecommerce" class="productDetailsImg border-base lg:w-1/2 w-full lg:h-auto  object-contain object- rounded"
                            src={imgUrl} />


                        <div class=" border-gray-100 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <p class="text-sm pb-2 title-font text-gray-500 uppercase tracking-widest">{brand}</p>
                            <h1 class=" text-3xl title-font font-medium">{name}</h1>

                            {/* Review section */}
                            <div class="flex mb-2 ">
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
                                    <span class="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                            </div>

                            {/* discount percentage */}
                            <p class="text-sm pb-2 title-font text-green uppercase tracking-widest">Save: {discountRoundPrice}%</p>


                            {/* price   */}
                            <div class="flex mb-2 items-center ">
                                <span style={{ color: '#4c4c4cc7' }} class="title-font pr-4 line-through font-medium text-xl"><span>$</span>{originalPrice}</span>
                                <span class="title-font font-medium text-3xl  text-base"><span>$</span>{discountPrice}</span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

                            </div>

                            {/* Availability */}
                            <h1 className=" text-2xl inline-block mr-3">Availability: </h1>
                            <span className='text-md text-red'>{available} left in stock</span>

                            {/* color and size section      */}
                            <div class="flex flex-row item-start mt-2 items-center   mb-5">
                                <div class=" items-center">
                                    <select class="select select-primary w-22  mr-4 max-w-xs">
                                        <option disabled selected>Size</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>
                                <div class="flex items-center">
                                    <span class="mr-3">Color</span>
                                    <button class="border-2 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 bg-blue ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 bg-red ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                            </div>


                            {/* update quantity   */}
                            <div className="flex-col flex">

                                <form className="flex " onSubmit={handleSubmit(onSubmit)}>

                                    {/* Input discountPrice Price */}
                                    <div className="form-control w-full max-w-xs">
                                        <input
                                            type="number"
                                            placeholder=" Restock Quantity"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("restockQuantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Product Price is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                        </label>
                                    </div>

                                    {/* Sbmit Button */}
                                    <input className='btn bg-base  text-white' type="submit" value="Restock Stocks" />
                                </form>

                                <button onClick={() => deliveryProduct()} className="btn my-3 bg-blue ">PLACE DELIVERY</button>
                                <Link to="/addshoe" className="btn mb-3 bg-base1 ">Add new Item</Link>
                                <Link to='/manageshoes' className="btn bg-red"> Manage Inventory</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShoeDetails;