// import { useState } from 'react';
import useProducts from '../Hooks/Hooks';
import Product from './Product';

const Products = () => {

    const products = useProducts([])
    console.log(products)

    return (
        <div className=" container mx-auto w-100 ">
            <h1 className="p-3 font-bold text-center text-base1 sm:text-xl md:text-3xl lg:text-4xl">MAN'S SHOES</h1>
            {/* <Heading title='Portfolio' /> */}
            {/* <div className='cata flex justify-center flex-wrap projects text-center text-neutral pb-7'>
                {category.map((category) => (
                    <button className='projects ' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                        {category}
                    </button>
                ))}
            </div> */}
            <div className="
                m-3 justify-items-center grid 
                sm:grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4 ">
                {
                    products[0].map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;