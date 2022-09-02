import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const AllShoes = () => {

    const { isLoading, error, data: products } = useQuery(['allShoeData'], () =>
        fetch('https://pure-shore-88854.herokuapp.com/allshoes').then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message
    // console.log(products)

    return (
        <div className=" container mx-auto w-100 ">
            <h1 className="p-3 font-bold text-center text-base1 sm:text-xl md:text-3xl lg:text-4xl">MAN'S SHOES</h1>

            <div className="
                m-3 justify-items-center grid 
                sm:grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4 ">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllShoes;