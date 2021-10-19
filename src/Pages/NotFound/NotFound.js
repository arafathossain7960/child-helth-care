import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="notFound">
                <div>
                    <h3>Page not found</h3>
                    <h1>4O4</h1>
                    <h4 className="text-danger">Something went wrong!!!</h4>
                  
                    <Link to='/home' className="btn btn-primary">Go home</Link>
                </div>
           

            </div>
            
        </div>
    );
};

export default NotFound;