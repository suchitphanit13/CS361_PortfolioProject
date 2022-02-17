import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SourceWikiPage = () => {

return (
    <div>
        <h4> Learn more about your source below!</h4>

        <a href= "https://en.wikipedia.org/wiki/Poker">Click here to learn more about your source!</a>
        <div></div>
        <Link to="/">Click here to go back home!</Link>
        <div></div>
        <Link to="/add-earning">Click here to add more data!</Link>
        <div></div>
        
    </div>
    );
}
export default SourceWikiPage;