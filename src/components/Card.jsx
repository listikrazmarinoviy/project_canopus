import React from "react";
import "./Card.css";

export const Card = ({
    title,
    description,
    buttonText,
    link,
}) => {
    return (
        <div className = "card-container">
            <h4 className = "card-title">{title}</h4>
            <p className = "card-description">{description}</p>
            <a href = {link} className = "card-btn">{buttonText}</a>
    </div>
    )
}