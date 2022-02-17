import React from 'react';
import Earning from './Earning';

function EarningList({ earnings, onDelete, onEdit }) {
    return (
        <table id="earnings">
            <thead>
                <tr>
                    <th>Source</th>
                    <th>Amount Earned</th>
                    <th>Hours Worked</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {earnings.map((earning, i) => <Earning earning={earning}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default EarningList;
