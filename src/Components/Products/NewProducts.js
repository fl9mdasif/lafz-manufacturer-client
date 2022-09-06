import React from 'react';
import '../../../src/Components/Home/Home.styles.css'
import "swiper/css";
import "swiper/css/navigation";
// import { useQuery } from '@tanstack/react-query'
import Product from './Product';
import { Link } from 'react-router-dom';
// import Loading from '../Shared/Loading';
import useProducts from '../Hooks/Hooks';

const NewProducts = () => {

    const products = useProducts([])
    // console.log(products)
    return (

        <>
            <h1 className="p-3 font-bold text-center text-base1
            sm:text-xl 
            md:text-3xl 
            lg:text-4xl">NEW COLLECTION</h1>


            <div className="container mx-auto w-100
                    m-3 justify-items-center grid 
                    sm:grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4 ">
                {
                    products[0].map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

            <div className='flex justify-center mb-8'>
                <button className=" bg-base1  btn"><Link to="allShoes" > View All Products</Link></button>
            </div>
        </>
    );
};

export default NewProducts;