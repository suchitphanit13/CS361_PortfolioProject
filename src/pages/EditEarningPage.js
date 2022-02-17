import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditEarningPage = ({ earningToEdit }) => {
    console.log(earningToEdit)
    const [source, setSource] = useState(earningToEdit.source);
    const [amount, setAmount] = useState(earningToEdit.amount);
    const [hours, setHours] = useState(earningToEdit.hours);
    const [date, setDate] = useState(earningToEdit.date);
    
    const history = useHistory(); 

    const editEarning = async () => {
        const editedEarning = { source, amount,hours, date };
        const response = await fetch(`/earnings/${earningToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedEarning),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the earning!");
        } else {
            alert(`Failed to edit earning, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1> Edit Earning</h1>
            <input
                type="text"
                value={source}
                onChange={e => setSource(e.target.value)} />
            <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)} />
            <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={editEarning}
            >Save</button>
        </div>
    );
}

export default EditEarningPage;