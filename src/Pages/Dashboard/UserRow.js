import React from 'react';

const UserRow = ({ user }) => {
    return (
        <tr>
            <th>1</th>
            <td>{user.email}</td>
            <td><button class="btn text-white">Make Admin</button></td>
            <td><button class="btn bg-red-500 border-0 text-white">Remove User</button></td>
        </tr>
    );
};

export default UserRow; 