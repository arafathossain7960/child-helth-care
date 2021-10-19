import React, { useEffect, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';
import './Volunteers.css';
const Volunteers = () => {
    const [volunteers, setVolunteers]=useState([]);
    useEffect(()=>{
        fetch('./volunteer.json')
        .then(res => res.json())
        .then(data => setVolunteers(data))
    },[])
    return (
        <div className="mt-3">
            <div className="service-title text-center pt-3">
                <h3>Our dedicated Volunteer</h3>
                <p>This are the most active Volunteers</p>

            </div>
           <div className="row gy-3">
            {
                volunteers.map(volunteer => <Volunteer
                key={volunteer.id}
                volunteer={volunteer}
                ></Volunteer>)
            }

           </div>
        </div>
    );
};

export default Volunteers;