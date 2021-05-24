import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit , faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import admin from '../../../assets/images/pic1.jpg';
import './Admin.css';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Admin = () => {

    const [makeAdmin,setMakeAdmin] = useState(false);

    return (
        <div className="admin-area">
            <h3 className="dashBoard-title">{ makeAdmin ? "Make An Admin" :"Admin List"}</h3>

            <p onClick={()=>setMakeAdmin(!makeAdmin)}>{ makeAdmin ?"Admin List" : "Make An Admin" }</p> 

           { makeAdmin ? <MakeAdmin/> : <div className="single-admin"> 
                <div className="admin-pic"> 
                    <img src={admin} alt="" />
                </div>
                <div className="admin-name"> 
                    <h3>admin name</h3>
                    <p>user@gamil.com</p>
                </div>
                <div className="protfolio-icon">
                    <span className="edit-protfolio"><FontAwesomeIcon icon={faEdit} /> </span>
                    <span className="delete-protfolio"><FontAwesomeIcon icon={faTrashAlt} /></span> 
                </div>
            </div>}
        </div>
    );
};

export default Admin;