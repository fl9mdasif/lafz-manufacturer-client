import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const AllUsers = () => {
    const { isLoading, error, data: users, refetch } = useQuery(['usersData'], () =>
        fetch(`https://polar-atoll-50768.herokuapp.com/users`, {
            method: 'GET',
            headers: {
                'authorization': ` Bearer ${localStorage.getItem('JWT_TOKEN')}`
            }
        }).then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message;



    // const { email } = users
    return (

        <div className="overflow-x-auto">
            <div className="py-10 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">USER MANAGEMENT</div>

            <table className="table table-compact w-full mx-auto text-center">
                <thead>
                    <tr>
                        <th>No.</th>
                        {/* <th>Name</th> */}
                        <th>Email</th>
                        <th>Update</th>
                        <th>Manage</th>
                        {/* <th>Confirm</th> */}

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <UsersRow user={user}
                                refetch={refetch}
                                index={index}
                                key={user._id}></UsersRow>
                        )
                    }
                </tbody >
            </table >
        </div >
    );
};

export default AllUsers;