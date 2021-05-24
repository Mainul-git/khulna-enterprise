import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import SingleProject from '../../Share/SingleProject/SingleProject';
import Slider from '../../Share/Slider/Slider';
import Concern from '../Concern/Concern';
import Welcome from '../Welcome/Welcome';

import './Home.css';

const Home = () => {
    const number =[1,2,3,4,5,6]

    return (
        <>
            <Header />
            <Slider/>
            <Welcome />

            {/* project area Start */}
            <div className="project-area text-center"> 
                <h3 className="project-heading text-center">PROJECT HIGHLIGHTS</h3>
                <div className="container"> 
                    <div className="row">
                        {
                            number.map( num => <SingleProject />)
                        }
                    </div>
                    <Link className="common-btn hover-link-left"  to="/project">View All Projects</Link>
                </div>
            </div>{/* project area End */}

            <Concern />

            <Footer/>
        </>
    );
};

export default Home;