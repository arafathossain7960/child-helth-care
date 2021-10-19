import React from 'react';
import { Link } from 'react-router-dom';
import './Donation.css';
const Donation = () => {
    return (
        <div className="donation-container">
            <div className="donation-contain text-center">
                <h3>Donate Something</h3>
                <input type="number" className="form-control"/>
                <br />
                <Link to='/thank'>
                <input className="btn btn-primary" type="submit" value="Submit" />
                </Link>
            </div>
            
        </div>
    );
};

export default Donation;