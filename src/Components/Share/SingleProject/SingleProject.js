import React from 'react';
import { useHistory } from "react-router-dom";
import img from '../../../assets/images/projects/project1.jpg';

import './SingleProject.css';

const SingleProject = () => {

    let history = useHistory();

    const handleClick = ()=>{


        history.push('/project/single')
    }
    

    return (
        <div onClick={()=>handleClick()} className="col-lg-4 col-md-6">
            <div className="single-project-wrap effect-bubba  m-3" > 
                <img src={img} alt=""/>
                <div className="caption "> 
                    <h2 className="text-center">Project Captionas is ready </h2>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;