import React from 'react';
import { Link } from 'react-router-dom';
import EarningList from '../components/EarningList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function CreateEarningPage({setEarningToEdit}) {
    const [earnings, setEarnings] = useState([]);
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [hours, setHours] = useState('');
    const [date, setDate] = useState('');



    const history = useHistory();

    const createEarning = async () => {
        const newEarning = { source, amount,hours, date };
        const response = await fetch('/earnings', {
            method: 'POST',
            body: JSON.stringify(newEarning),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the Earning!");
        } else {
            alert(`Failed to add Earning, status code = ${response.status}`);
        }
        window.location.reload();
        //history.push("/add-earning")
    };


    const onDelete = async _id => {
        const response = await fetch(`/earnings/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            setEarnings(earnings.filter(m =>m._id !==_id));
        } else {
        console.error(`Failed to delete earning with id = ${_id}, status code = ${response.status}`)
        }
    }

    const onEdit = earning => {
        console.log(earning)
        setEarningToEdit(earning);
        history.push("/edit-earning");
    }
 
    const loadEarnings = async () => {
        const response = await fetch('/earnings');
        const data = await response.json();
        setEarnings(data);
    }
        
    useEffect(() => {
        loadEarnings();
    }, []);

    return (
        <>
          <div>
            <h1>Enter your earnings in the box below!</h1>
            <input
                type="text"
                placeholder="Enter Source here"
                value={source}
                onChange={e => setSource(e.target.value)} />
            <input
                type="number"
                placeholder="Enter Amount here"
                value={amount}
                onChange={e => setAmount(e.target.value)} />
            <input
                type="number"
                placeholder="Enter Hours here"
                value={hours}
                onChange={e => setHours(e.target.value)} />
            <input
                type="text"
                placeholder="Enter Date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={createEarning}
            >Add</button>
        </div>  
            <EarningList earnings={earnings} onDelete={onDelete} onEdit={onEdit}></EarningList>
            <Link to="/">Go Back Home!</Link>
            <Link to="/total-earnings">Click here to see your total earnings for a source!</Link>
        </>
    );
}

export default CreateEarningPage;