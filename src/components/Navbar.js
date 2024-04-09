import React from "react"
import airbnbLogo from "../images/airbnb-logo.png"
import '../style.css';

export default function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="airbnbLogo" alt="Airbnb logo"/>
        </nav>
    )
}