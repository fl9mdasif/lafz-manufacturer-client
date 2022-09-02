import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query'
import './ProductStyle.css'
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageProduct = () => {


    const { isLoading, error, data: product } = useQuery(['manageShoeData'], () =>
        fetch(`https://pure-shore-88854.herokuapp.com/allshoes`).then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message

    // Delete Single Shoe
    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://pure-shore-88854.herokuapp.com/allshoes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.error('product deleted from All shoes')
                    // refetch()

                })
        }
    };
    return (
        <div className="">
            <div className="py-10 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">MANAGE PRODUCT</div>
            <div>
                <p className='text-red '>Only Admin could manage these items. You could Add / Manage your own items on
                    <span className=' px-2 text-blue underline'>
                        <Link to='/addshoe'>Add Item </Link>
                    </span>
                    page and
                    <span className=' px-2 text-blue underline'>
                        <Link to='/myitems'>Manage Items</Link>
                    </span>
                    page
                </p>
            </div>
            <table className="table table-compact w-full mx-auto text-center">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Gender</th>
                        <th>Price</th>
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
                                <td>{product.brand}</td>
                                <td>{product.available}</td>
                                <td>{product.gender}</td>
                                <td>{product.discountPrice}</td>
                                <td>

                                    <button
                                        disabled
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

export default ManageProduct;