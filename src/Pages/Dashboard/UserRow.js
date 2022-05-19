import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Admin added successFully');
            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button class="btn text-white" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button class="btn bg-red-500 border-0 text-white">Remove User</button></td>
        </tr>
    );
};

export default UserRow; 