import React from "react"
import starImage from "../images/star.png"
import "../style.css"

export default function Card(props) {
    {console.log(props)}
    return(
        <div className="card">
            {props.item.openSpots === 0 && <div className="cardBadge">SOLD OUT</div>}
            <img 
                src={`../images/${props.item.coverImg}`} 
                className="cardImage" 
                alt="Katie Zaferes"
            />
            <div className="cardStats">
                <img 
                    src={starImage}
                    className="starImage" 
                    alt="red star" 
                />
                <span className="ratingText">{props.item.stats.rating}</span>
                <span className="grayText">({props.item.stats.reviewCount}) • </span>
                <span className="grayText">{props.item.country}</span>
            </div>
            <h2 className="cardTitle">{props.item.title}</h2>
            <p className="cardPrice"><strong>From ${props.item.price}</strong> / person</p>
        </div>
    )
}