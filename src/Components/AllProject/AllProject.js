import React from 'react';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';
import SingleProject from '../Share/SingleProject/SingleProject';
import './AllProject.css';
const AllProject = () => {

    const number =[1,2,3,4,5,6]
    return (
        <>
        <Header/>
        <div className="project-banner mb-5"> 
            <div className="project-banner-content"> 
                    <p>Projects</p>
            </div>
        </div>

        <div className="all-projects mb-4"> 
            <h2 className="text-center my-5">All Projects</h2>
            <div className="container-fluid"> 
                <div className="row"> 
                        {
                            number.map( num => <SingleProject />)
                        }
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AllProject;