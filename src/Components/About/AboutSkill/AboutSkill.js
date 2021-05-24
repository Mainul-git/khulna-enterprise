import React from 'react';
import rightImg from '../../../assets/images/about_right_shape1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faChartLine, faCoffee, faHome, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';
import './AboutSkill.css';

const AboutSkill = () => {
    return (
        <div className="main-skill">
           <div className="container">
                <div className="top-skill">
                    <h2>SKILLS AND EXPERIENCES</h2>
                    <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re not here to give just a property, we’re here to help create memories; the imprints of life that last generations.</p>
                </div>
               <div className="row">
            
                    <div  className="col-lg-4 skill-col">
                        <div className="font-div">
                            <FontAwesomeIcon  className="font-icon" icon={faHome} />
                        </div>
                        <h3>House Smart</h3>
                        <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re not</p>
                    </div>

                    <div className="col-lg-4 skill-col">
                        <div className="font-div">
                            <FontAwesomeIcon className="font-icon" icon={faChartLine} />
                            </div>
                        <h3>Analysis</h3>
                        <p>In tortor neque, faucibus a sem vulputate, tristique faucibus velit. Etiam porttitor eget leo non maximus.</p>
                    </div>

                    <div className="col-lg-4 skill-col">
                        <div className="font-div">
                            <FontAwesomeIcon className="font-icon" icon={faLightbulb} />
                        </div>
                        <h3>Concept</h3>
                        <p>In tortor neque, faucibus a sem vulputate, tristique faucibus velit. Etiam porttitor eget leo non maximus.</p>
                    </div>

                    <div className="col-lg-4 skill-col">
                        <div className="font-div">
                        <FontAwesomeIcon className="font-icon" icon={faBook} />
                        </div>
                        <h3>Planning</h3>
                        <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re not</p>
                    </div>

                    <div className="col-lg-4 skill-col ">
                        <div className="font-div">
                        <FontAwesomeIcon className="font-icon" icon={faUsers} />
                        </div>
                        <h3>Team work</h3>
                        <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re not</p>
                    </div>

                    <div className="col-lg-4 skill-col">
                        <div className="font-div">
                        <FontAwesomeIcon className="font-icon" icon={faBuilding} />
                        </div>
                            <h3>Building Renovation</h3>
                            <p>Our aim is to enhance experiences by inspiring standard of living and by giving a sense of security. We’re no</p>
                    </div>
                 </div>
           </div>
        </div>
    );
};

export default AboutSkill;