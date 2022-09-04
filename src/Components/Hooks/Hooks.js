import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import Loading from "../Shared/Loading";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    const { status, isLoading, error, data: product } = useQuery(['allShoeData'], () =>
        fetch('http://localhost:5000/allProducts').then(res =>
            res.json()),
    )

    useEffect(() => {

        if (isLoading === 'true') {
            return <Loading />
        } else if (status === 'success') {
            setProducts(product)
        }

    }, [error, isLoading, product, status])
    return [products, setProducts]

}
export default useProducts;