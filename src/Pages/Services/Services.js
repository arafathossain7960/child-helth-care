import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Services.css';

const Services = () => {
   const {id}= useParams()
  

    return (
        <div>
            <h1>This is a services {id}  </h1>
        
        </div>
    );
};

export default Services;