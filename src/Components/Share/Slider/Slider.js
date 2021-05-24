import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../../assets/images/pic1.jpg';
import pic2 from '../../../assets/images/pic2.jpg';
import pic3 from '../../../assets/images/pic3.jpg';

import './Slider.css'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">


                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={pic1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption">
                            <div className="carousel-content"> 
                                <h2>Fist Carousel slider</h2>
                                <h3>sub carousel slider</h3>
                            </div>
                            <div className="carousel-button"> 
                                <ul>
                                    <li><Link className="hover-link-left" to="/about">About Us</Link></li>
                                    <li><Link className="hover-link-right" to="/contact">Let's Tlak</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item " data-bs-interval="3000">
                        <img src={pic2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption">
                            <div className="carousel-content"> 
                                <h2>Fist Carousel slider 2</h2>
                                <h3>sub carousel slider</h3>
                            </div>
                            <div className="carousel-button"> 
                                <ul>
                                    <li><Link className="hover-link-left" to="/project">Projects</Link></li>
                                    <li><Link className="hover-link-right" to="/contact">Let's Tlak</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="3000">
                        <img src={pic3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption">
                            <div className="carousel-content"> 
                                <h2>Fist Carousel slider 3</h2>
                                <h3>sub carousel slider</h3>
                            </div>
                            <div className="carousel-button"> 
                                <ul>
                                    <li>
                                        <Link className="hover-link-right" to="/contact">Let's Tlak</Link>
                                    </li>
                                    <li>
                                        <Link className="hover-link-left" to="/about">About Us</Link>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                  
                </div>
            </div>
        </div>
    );
};

export default Slider;