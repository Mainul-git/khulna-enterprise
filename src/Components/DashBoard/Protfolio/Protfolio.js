import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit , faTrashAlt} from '@fortawesome/free-regular-svg-icons';

import img from '../../../assets/images/pic1.jpg';
import './Protfolio.css';

const Protfolio = () => {
    const fake = [1,2,3]

    return (
        <div className="dashboard-protfolio">
                <h3 className="dashBoard-title">All protfolio</h3>
            {
                fake.map( item => <div className="single-protfolio"> 
                <div className="protfolio-title"> 
                    <h4>Title Here</h4>
                </div>
                <div className="protfolio-image"> 
                    <img src={img} alt="" />
                </div>
                <div className="protfolio-icon">
                    <span className="edit-protfolio"><FontAwesomeIcon icon={faEdit} /> </span>
                    <span className="delete-protfolio"><FontAwesomeIcon icon={faTrashAlt} /></span> 
                </div>
            </div>)
            }
            


        </div>
    );
};

export default Protfolio;