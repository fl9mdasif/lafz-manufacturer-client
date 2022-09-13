// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
// import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import useAdmin from '../Hooks/useAdmin';

// import Loading from '../Shared/Loading';

const Dashboard = () => {

    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    console.log('dashboard admin:', admin)
    console.log('dashboard user:', user)


    return (
        <div class="drawer drawer-mobile shadow-md">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2> */}
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base1 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {admin || <li><Link to="/dashboard">My Order</Link></li>}
                    {admin || <li><Link to="/dashboard/addReview">Add a Review</Link></li>}
                    {admin || <li><Link to="/dashboard/myProfile">My Profile</Link></li>}
                    {admin || <li><Link to="/dashboard/myPortfolio">My Portfolio</Link></li>}

                    {/* admin role   */}

                    {admin && <li><Link to="/dashboard/addProduct">Add Product</Link></li>}
                    {admin && <li><Link to="/dashboard/manageProducts">Manage Product</Link></li>}
                    {admin && <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>}
                    {admin && <li><Link to="/dashboard/users">Manage All Users</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;