import React from 'react';
import { Link } from 'react-router-dom';
import leftImg from '../../../assets/images/left-im1.png';

import './Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-area"> 
            <div className="welcome-bg">
                {/* <img className="img-fluid" src={leftImg} alt=""/> */}
            </div>
            <div className="container"> 
                <div className="row  pt-5 pb-5"> 
                    <div className="col-lg-6"> 
                        <div className="welcome-left-part"> 
                            <h2>Welcome To <br/> Kuntala Enterprise </h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="welcome-right-part"> 
                            <h3>Kuntala</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laboriosam est quae qui dignissimos dicta dolorem corporis modi quia vero optio adipisci quod, cum eveniet 
                                <br/>
                                <br/>
                                Numquam vitae unde consequatur dolorum assumenda excepturi rerum nostrum hic tempore ratione asperiores quidem error iure ullam ex illum dicta voluptates aspernatur eius, eligendi, nesciunt consectetur! Minima eum, sit eius rem et neque. Asperiores hic tempora quo iure beatae a harum vitae, quod ex, nemo recu</p>
                            <Link className="common-btn hover-link-left"  to="/about">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;