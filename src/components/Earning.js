import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
function Earning({ earning, onDelete, onEdit }) {
    return (
        <tr>
            <td>{earning.source}</td>
            <td>{earning.amount}</td>
            <td>{earning.hours}</td>
            <td>{earning.date}</td>
            <td><MdEdit onClick={() => onEdit(earning)}/></td>
            <td><MdDeleteForever onClick={() => onDelete(earning._id)}/></td>
        </tr>
    );
}

export default Earning;