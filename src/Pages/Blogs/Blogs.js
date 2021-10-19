import React from 'react';
import './Blogs.css';
import blog1 from '../../Images/slider/slider1.png';
import blog2 from '../../Images/slider/slider2.png';
import blog3 from '../../Images/slider/slider3.png';

const Blogs = () => {
    return (
        <div className="blogs">
            <h1>Most popular blogs</h1>
            <div className="blogs-container">
                <img src={blog1} alt="" />
                <h3>SuperKids Nutrition</h3>
                <p>Our mission is to create future healthier generations through good nutrition. SuperKids Nutrition aims to empower children and families to reach their full potential by having the energy and good health needed to accomplish their life goals. We help parents and communities in the United States and around the world to become more knowledgeable about nutrition and enable children to make healthy.</p>
            </div>

            <div className="blogs-container">
                <img src={blog2} alt="" />
                <h3>Cincinnati Children's</h3>
                <p>A place for families to find stories, articles and advice about pediatric health and medical conditions. Blog covers Safety & Prevention, Heart Conditions, Learning & Growing, Research & Discoveries, Healthy Living, Rare & Complex Conditions. Cincinnati Children's is a not-for-profit hospital and research center pioneering breakthrough treatments, providing outstanding family-centered patient care and training health care professionals for the future.</p>
            </div>

            <div className="blogs-container">
                <img src={blog3} alt="" />
                <h3>Child Health News</h3>
                <p>News-Medical.Net aims to segment, profile and distribute medical news to the widest possible audience of potential beneficiaries worldwide and to provide a forum for ideas, debate and learning, and to facilitate interaction between all parts of the medical health sciences community worldwide. Here you will find latest Child Health News and Research.</p>
            </div>
            <div className="blogs-container">
                <img src={blog2} alt="" />
                <h3>Cincinnati Children's</h3>
                <p>A place for families to find stories, articles and advice about pediatric health and medical conditions. Blog covers Safety & Prevention, Heart Conditions, Learning & Growing, Research & Discoveries, Healthy Living, Rare & Complex Conditions. Cincinnati Children's is a not-for-profit hospital and research center pioneering breakthrough treatments, providing outstanding family-centered patient care and training health care professionals for the future.</p>
            </div>
            <div className="blogs-container">
                <img src={blog1} alt="" />
                <h3>SuperKids Nutrition</h3>
                <p>Our mission is to create future healthier generations through good nutrition. SuperKids Nutrition aims to empower children and families to reach their full potential by having the energy and good health needed to accomplish their life goals. We help parents and communities in the United States and around the world to become more knowledgeable about nutrition and enable children to make healthy.</p>
            </div>
        </div>
    );
};

export default Blogs;