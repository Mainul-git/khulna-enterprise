import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import footer from '../../../assets/images/footer_shape.png';
import { Link } from 'react-router-dom';



import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div  className="col-xs-6 col-sm-6 col-lg-4 col-md-6 ">
                    <div className="footer-left-section"> 
                        <img className="footer-left" src={footer} alt=""/>
                        <div className="footer-left-caption">
                            <Link to="/"><span className="text-white">Kuntala</span>  <span>Enterprise</span></Link>
                            <p>Copyright © kuntala enterprise</p>
                            <p> by <a target="_blank" href="http://microxen.com/">MicroXen Technology</a> </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-2  col-md-6  footer-link">
                    <h6>QUICK LINKS</h6>
                    <ul className="footer-ul">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/project">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                    <div className="col-xs-6 col-sm-6  col-lg-4 col-md-6  footer-link">
                        <h6>CONTACT DETAILS</h6>
                        <p>77/1 KAKRAIL, RAMNA, VIP ROAD, DHAKA-1000</p>
                        <p>TEL: +88 (02) 9339477 / 9339045</p>
                        <p>FAX: +88 (02) 9339416</p>
                        <div className="social-icon ">
                            <Link to="/"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to="/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-lg-2 col-md-6  footer-link footer-right-section">
                        <h6>Yours</h6>
                        <p>Constructer</p>
                        <p className="partner">Partner</p>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;