import React from 'react';
import { Link } from 'react-router-dom';
import EarningList from '../components/EarningList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setEarningToEdit}) {
    const [earnings, setEarnings] = useState([]);
    const history = useHistory();

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
            <h2> Welcome to the Online Earnings Tracker!</h2>
            <Link to="/add-earning">Click here to start!</Link>
            <Link to="/total-earnings">Click here to see your total earnings for a source!</Link>
        </>
    );
}

export default HomePage;