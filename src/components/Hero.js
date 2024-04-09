import React from "react";
import heroLogo from "../images/photo-grid.png"
import "../style.css"

export default function Hero() {
    return(
        <div>
            <img src={heroLogo} alt="Many people doing activities" className="heroLogo"/>
            <h1 className="heroHeader">Online Experiences</h1>
            <h4 className="heroSubText">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</h4>
        </div>
    )
}
