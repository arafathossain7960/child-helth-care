import React from 'react';
import './Volunteer.css';
import facebook from '../../../Images/icons/facebook.png';
import instagram from '../../../Images/icons/instagram.png';
import twitter from '../../../Images/icons/twitter.png';
import youtube from '../../../Images/icons/youtube.png';
const Volunteer = ({volunteer}) => {
    const {imgUrl,name, designation,about}=volunteer;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="volunteer-cart">
                <div className="volunteer-name"> 
                <img src={imgUrl} alt="" />
                 <h5>{name}</h5>
            </div>
            
            <h6> Designation : {designation}</h6>
            <small>{about}</small>
            <div className="icons pt-2">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
            </div>
            <div>

            </div>
            </div>
           
        </div>
    );
};

export default Volunteer;