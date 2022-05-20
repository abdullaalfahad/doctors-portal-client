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
            .then(res => {
                if (res.status === 403) {
                    toast.error('Only admin can do it')
                }
                return res.json();
            })
            .then(data => {
                if (data.matchedCount > 0) {
                    refetch();
                    toast.success('Admin added successFully');
                }
            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className="btn text-white" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button className="btn bg-red-500 border-0 text-white">Remove User</button></td>
        </tr>
    );
};

export default UserRow; 