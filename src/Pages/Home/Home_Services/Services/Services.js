import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('./home-service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="services-container mt-5" >
                <div className="service-title pt-2 text-center">
                    <h2 className="py-2 text-center">Our service for Children</h2>
                    <p>During the camping we will provide so many services here are some display</p>
                </div>
            <div className="row">
                {
                    services.map(service => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;