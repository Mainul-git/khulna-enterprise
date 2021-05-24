import React from 'react';
import Header from '../Share/Header/Header';
import contactImage from '../../assets/images/inner-about.jpg';
import './About.css';
import Footer from '../Share/Footer/Footer';
import AboutSkill from './AboutSkill/AboutSkill';
import AboutBegin from './AboutBegin/AboutBegin';

const About = () => {
    return (
        <>
            <Header/>
            <div className="contact-banner ">
                <img className="img-fluid " src={contactImage} alt="" />
                <div className="contact-caption">
                    <p className="mt-5">About Us</p>
                </div>
            </div>
            <AboutBegin/>
            <div className="container"> 
                <AboutSkill/>
            </div>

            <Footer/>
        </>
    );
};

export default About;