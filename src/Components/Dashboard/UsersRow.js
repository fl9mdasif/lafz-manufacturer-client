import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, refetch, index }) => {
    const { _id, email, role } = user;

    const makeAdmin = () => {
        fetch(`https://polar-atoll-50768.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('JWT_TOKEN')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('successfully made an admin')
                    console.log(data)
                }
            })
    }
    const deleteUser = (id) => {
        // console.log('id:', id)
        const proceed = window.confirm('Are you sure to delete a user');
        if (proceed) {
            const url = `https://polar-atoll-50768.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.error('user deleted from allUsers')
                    refetch()
                })
        }
    };


    return (
        <tr className='contentTr'>
            <td>{index + 1}</td>
            <td>{email}</td>

            <td className='flex justify-center items-center'>
                {
                    role !== 'admin' && <button
                        onClick={makeAdmin} className='btn btn-xs bg-base1'>Make Admin
                    </button>
                }
                {role === 'admin' && <p className='text-green'>Already an Admin</p>}
            </td>
            <td>
                <button
                    onClick={() => deleteUser(_id)}
                    className='btn btn-xs '>
                    <box-icon color='red' type='solid' name='trash'></box-icon>
                </button>

            </td>
        </tr>
    );
};

export default UsersRow;