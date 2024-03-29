import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query'
import '../Products/ProductStyle.css'
// import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageProduct = () => {


    const { isLoading, error, data: product, refetch } = useQuery(['manageShoeData'], () =>
        fetch(`https://lafz-server.onrender.com/allProducts`).then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message

    // Delete Single Shoe
    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://lafz-server.onrender.com/allProducts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.error('product deleted from All shoes')
                    refetch()

                })
        }
    };
    return (
        <div className="">
            <div className="py-10 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">MANAGE PRODUCT</div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full mx-auto text-center">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price/unit</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((product, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            style={{
                                                height: '42px',
                                                width: '42px',
                                                borderRadius: '5',
                                                marginLeft: '10px'
                                            }}
                                            referrerpolicy="no-referrer"
                                            src={product.imgUrl} alt=""
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.available}</td>
                                    <td>Tk {product.price}</td>

                                    <td>
                                        <button
                                            // disabled
                                            onClick={() => manageProductToDelete(product._id)}
                                            className=' btn disabledDltBtn border-none text-white btn-xs bg-white'
                                        >
                                            <box-icon color='red' type='solid' name='trash'></box-icon>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody >
                </table >
            </div>

        </div >
    );
};

export default ManageProduct;