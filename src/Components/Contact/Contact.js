import React from 'react';
import Header from '../Share/Header/Header';
import contactImage from '../../assets/images/inner-contact2.jpg';
import './Contact.css';
import Footer from '../Share/Footer/Footer';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <>
            <Header/>
            <div className="contact-banner">
                <img className="img-fluid" src={contactImage} alt="" />
                <div className="contact-caption">
                    <p className="mt-5">Contact Us</p>
                </div>
            </div>
            <div className="contact-form-area">
                <div className="container"> 
                <h2 className="text-center pb-3 text-blck">Get In Touch</h2>
            <p className="text-center pb-3 text-blck">We’re ready to answer any questions you might have about existing coverage, a new policy, or any other help you need. You can call us at +088 (02) 9339477 / 9339045 Or, fill out our information form below and one of our agents will be in touch as soon as possible.</p>
                    <div className="row contact-from-shadow"> 
                        <div className="col-lg-8"> 
                            <ContactForm/>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info"> 
                                <h3>Contact Information</h3>
                                <ul>
                                    <li>77/1 KAKRAIL, RAMNA, VIP ROAD, DHAKA-1000</li>
                                    <li>+088 (02) 9339477 / 9339045</li>
                                    <li>+088 (02) 9339416</li>
                                    <li>info@tomagroup.com.bd</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <Footer/>
        </>
    );
};

export default Contact;