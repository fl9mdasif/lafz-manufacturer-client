import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://polar-atoll-50768.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': ` Bearer ${localStorage.getItem('JWT_TOKEN')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('successfully make admin')
                console.log(data)
            })
    }
    return (
        <tr className='contentTr'>
            <td>{index + 1}</td>
            <th>Name</th>
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
                <button className='btn btn-xs bg-red'>Delete</button>
            </td>
        </tr>
    );
};

export default UsersRow;