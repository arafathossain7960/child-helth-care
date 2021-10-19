import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container pt-4 pb-2">

        <div className="row footer-contain">
            <div className="col-lg-5 col-md-5 col-sm-12">
                <h4>Get in Touch</h4>
                <p> Website : www.childrenhealthcare.com</p>
                <p> Email :childrenhealthcare@gmail.com</p>
                <p>Office :CHC Towar, #4 Street, center london, uk</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <h4>Know about us</h4>
                <p>Team</p>
                <p>Vision</p>
                <p>Activity</p>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <h4>Follow us</h4>
                <p>chc/page/facebook.com</p>
                <p>chc/page/Twitter.com</p>
                <p>chc/youtube.com</p>

            </div>
        </div>
        <p className="text-center ">All copy right &copy; hand by chc corporation 2021 </p>
        </div>
    );
};

export default Footer;