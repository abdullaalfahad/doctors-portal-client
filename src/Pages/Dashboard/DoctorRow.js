import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, email, specialty, img } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded-xl">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label htmlFor="delete-doctor-modal" class="btn modal-button btn-xs bg-red-500 text-white border-0" onClick={() => setDeletingDoctor(doctor)}>Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;