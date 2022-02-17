import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TotalEarningsPage = () => {

return (
    <div>
        <h3> See your total earnings below!</h3>
        <p> Your total earnings for poker is 400!</p>
        <Link to="/">Click here to go back home!</Link>
        <div></div>
        <Link to="/add-earning">Click here to add more data!</Link>
        <div></div>
        <Link to="/source-wiki">Click here to learn more about this source!</Link>
    </div>
    );
}
export default TotalEarningsPage;