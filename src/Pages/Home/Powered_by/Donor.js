import React from 'react';
import './Donor.css';
import who from '../../../Images/powered_by/who.png';
import uk from '../../../Images/powered_by/uk.png';
import unisef from '../../../Images/powered_by/unisef.png';
import rusia from '../../../Images/powered_by/rasia.png';
import india from '../../../Images/powered_by/india.png';
import china from '../../../Images/powered_by/msf.png';

const Donor = () => {
    return (
        <div className="mt-3">
            <div className="service-title text-center ">
                <h2>Our associate donor</h2>
                <p>it's a none profitable camping, so that, we need donation. This are the top donor. </p>

            </div>
            <div className="row g-4 donor-contain my-5 text-center">
                <div className="col-lg-4 col-md-4 col-sm-6 contain">
                    <div className="contain1">
                    <img src={who} alt="" />
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 contain">
                    <div className="contain1">
                    <img src={uk} alt="" />
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 contain">
                    <div className="contain1">
                    <img src={unisef} alt="" />
                    </div>
                   
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 contain">
                    <div className="contain1">
                    <img src={rusia} alt="" />
                    </div>
                   
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 contain">
                <div className="contain1">
                <img src={india} alt="" />
                        </div>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 contain">
                <div className="contain1">
                <img src={china} alt="" />
                        </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Donor;