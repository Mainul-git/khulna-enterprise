import React from 'react';
import {  Link } from "react-router-dom";
import leftBegin from '../../../assets/images/about_left-im1.png';
import './AboutBegin.css';

const AboutBegin = () => {

    return (
        <div className="main-begin">
            <div   className="left-begin-img"></div>
            <div className="second-begin container text-wrap container  w-auto">
               
                <div className="row w-auto">
                    <div  className="col-lg-6 left-begin ">
                        <h3 className="begin-bold me-5">WE HELP CLIENTS <br/>
                        BUILT WORLD CLASS <br/>
                        CONSTRUCTION PROJECTS</h3>
                    </div>
                    <div   className="col-lg-6 text-center">
                        <h2 className="begin-h2">Our <br/>
                        BEGINNING</h2>
                        <p className="begin-p ">Toma Construction & Co. Ltd. (TCCL) is one of the leading and reputed construction conglomerates in Bangladesh. Toma Construction & Co. Ltd. is a member of Toma Group. The Company has 25 years of experience and developed into a professional construction team that specializes in Bridges, Flyovers, Foundations, heavy civil construction, Jetty, Roads, Railway Tracks, Food grain Silo and other related infrastructures. Since its inception, the company has completed a good number of remarkable projects of various authorities in Bangladesh. TCCL’s Philosophy remains focused on delivering a safe, quality project in the most productive and efficient manner. The company is operating in more than 30 locations across the country. It has around 6,000 employees and an annual turnover of BDT more than 1000 crore.</p>
                        <div   className="butt">
                          <Link className="common-btn hover-link-left" to="/contact">GET A QUATE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBegin;