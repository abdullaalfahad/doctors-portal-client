import React from 'react';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, email, specialty, img } = doctor;
    const handleDelete = email => {
        fetch()
    }

    return (
        <tr>
            <th>{index}</th>
            <td>avatar</td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button class="btn btn-xs bg-red-500 text-white border-0" onClick={() => handleDelete(email)}>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;