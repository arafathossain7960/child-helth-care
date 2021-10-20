import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBookReader } from '@fortawesome/free-solid-svg-icons';
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
           <Link to={`/service/${id}`}>
             <button className="btn btn-primary"> <FontAwesomeIcon icon={faBookReader}/> Read more</button>
          
           </Link>
            </div>
          </div>
            
        </div>
    );
};

export default Service;