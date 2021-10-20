import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../../Images/banner/banner1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container pt-3">
            <div className="row  banner">
                <div className="banner-heading col-lg-6 col-md-6 col-sm-12">
                       <div className="header-contain">
                       <h2>Welcome ot <span className="heading">Children Health Camp</span></h2>
                        <p>We are focusing on children health ,  We set up healthcare camps in different places to provide health care to children  </p>
                        <Link to='/login'>
                        <button className="btn btn-danger">   Join Now   <FontAwesomeIcon icon={faSignInAlt} /></button>
                        </Link>
                       </div>

                </div>
                <div className="banner-img col-lg-6 col-md-6 col-sm-12 ">
                    <img src={banner1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;