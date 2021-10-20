import React from 'react';
import './Camp.css';

const Camp = () => {
    return (
        <div className=" camp">
            <h1 className="text-primary py-3">This is the schedule for attend camp</h1>
            <div className="camp-container">
                <h2>Area Name</h2> <h3>Date</h3>
           </div>
           <div className="camp-container">
                <h4>Home land</h4> <h6>25/10/2021</h6>
           </div>
           <div className="camp-container">
                <h4>Ice land</h4> <h6>29/10/2021</h6>
             
           </div>
           <div className="camp-container">
           <h4>Green land</h4> <h6>05/11/2021</h6>
               </div>
           <div className="camp-container">
  
           <h4>Hose vanu</h4> <h6>10/11/2021</h6>
               </div>
           <div className="camp-container">

           <h4>Hose vanu</h4> <h6>12/11/2021</h6>
               </div>
           <div className="camp-container">

           <h4>Hose vanu</h4> <h6>12/11/2021</h6>
               </div>

        </div>
    );
};

export default Camp;