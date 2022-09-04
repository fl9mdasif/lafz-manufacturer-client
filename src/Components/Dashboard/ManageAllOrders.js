import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query'
import '../Products/ProductStyle.css'
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {

    const { isLoading, error, data: products, refetch } = useQuery(['usersOrderData'], () =>
        fetch(`http://localhost:5000/userOrder`).then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message
    // console.log(products)


    // Delete Single Shoe
    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `http://localhost:5000/userOrder/${id}`;
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
        <div className="overflow-x-auto">
            <div className="py-10 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">MANAGE ALL ORDER</div>

            <table className="table table-compact w-full mx-auto text-center">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
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
                                <td>{product.orderQuantity}</td>
                                <td>${product.price}</td>
                                <td>

                                    <button
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
        </div >
    );
};

export default ManageAllOrders;