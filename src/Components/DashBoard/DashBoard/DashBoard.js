import React , { useState }from 'react';
import {    Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHdd, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
  import './DashBoard.css';
import Admin from '../Admin/Admin.js';

  import Protfolio from '../Protfolio/Protfolio.js'
import AddProtfolio from '../AddProtfolio/AddProtfolio';

const DashBoard = () => {

        const [showDashBoard,setShowDashBoard] = useState(null)

    return (
            <div className="container-fluid">
                <div className="row"> 
                    <div className="col-lg-2"> 

                       <div className="side-bar mt-3">
                            <div className="dashboard-logo"> 
                                <Link onClick={()=> setShowDashBoard(null)} to="/ke-dashboard">
                                    <p>Kuntala <span>EnterPrise</span> </p>
                                </Link>
                            </div>
                            <div className="dashboard-nav"> 
                                <ul>
                                    <li
                                        style={showDashBoard === null ? {color: '#009444'} : {color: '#000000'}}
                                        onClick={()=> setShowDashBoard(null)}>
                                            <FontAwesomeIcon className="mr-2" icon={faHdd} />
                                        Protfolio</li>
                                    <li 
                                    style={showDashBoard === false ? {color: '#009444'} : {color: '#000000'}}
                                        onClick={()=> setShowDashBoard(false)}>
                                            <FontAwesomeIcon className="mr-2" icon={faPlus} />
                                        Add Protfolio</li>
                                    <li 
                                    style={showDashBoard === true ? {color: '#009444'} : {color: '#000000'}}
                                        onClick={()=> setShowDashBoard(true)}>
                                            <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
                                        Admin</li>
                                </ul>
                            </div>
                            <div className="log-out">
                                <p>Log Out</p>
                            </div>
                       </div>

                    </div>
                    <div style={{backgroundColor: '#eee', height: '100vh'}} className="col-lg-9 mt-3">

                        {
                            showDashBoard === null && <Protfolio/>
                        }
                        {
                            showDashBoard === false && <AddProtfolio/>
                        }
                        {
                            showDashBoard === true && <Admin/>
                        }

                    </div>
                </div>
            </div>
    );
};

export default DashBoard;