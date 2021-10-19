import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, imgUrl, description, operationName }=service;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="service-cart" >
          <img src={imgUrl} alt="" />
          <div className="p-3">
            <h4>{operationName}</h4>
            <p>{description}</p>
            <Link to={`/services/${id}`}   className="btn btn-primary" >
          Reade more
            </Link>
            </div>
          </div>
            
        </div>
    );
};

export default Service;