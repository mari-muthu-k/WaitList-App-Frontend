import React from "react";
import NavBar from "../../components/navBar";
import "../../css/landing.css";
import { useNavigate } from 'react-router-dom';

const LandingPage = ()=>{
    const navigate = useNavigate();
    return(
        <div>
            <NavBar/>
            <div className="hero-container">
                <div className="content-box d-flex">
                    <div className="topContent">
                       Experience the power of innovation with the iPhone
                       <h4 style={{cursor:"pointer",fontWeight:"bold",textDecoration:"underline"}}
                       onClick={()=>{
                        navigate("/subscribe");
                      }}
                      >SUBSCRIBE NOW</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;