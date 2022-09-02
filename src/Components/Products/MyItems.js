import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query'
import './ProductStyle.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';

const MyItems = () => {

    const [user] = useAuthState(auth)
    const userEmail = user.reloadUserInfo.email;

    const { isLoading, error, data: products, refetch } = useQuery(['myShoeData'], () =>
        fetch(`https://pure-shore-88854.herokuapp.com/userAddedItems`).then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message
    // console.log(products)
    // const { name, brand, description, available, gender, originalPrice, discountPrice, imgUrl, discountRoundPrice } = product


    // Delete Single Shoe
    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://pure-shore-88854.herokuapp.com/userAddedItems/${id}`;
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

    // User uploaded information 
    const userOrders = [];
    // console.log(userOrders);
    products.map(product => {
        console.log('productmail:', product.email, 'user:', userEmail)
        if (product.email === userEmail) {
            userOrders.push(product)
        }
        else {
            // eslint-disable-next-line array-callback-return
            return;
        }
    });

    return (
        <div className="overflow-x-auto">
            <div className="py-10 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">MY ITEMS</div>

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
                        userOrders.map((product, index) =>
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

export default MyItems;