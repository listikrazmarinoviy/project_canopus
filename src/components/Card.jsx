import React from "react";
import "./Card.css";

import {Routes, Route, useNavigate} from 'react-router-dom';


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
            <button  className = "card-btn">{buttonText}</button>
    </div>
    )
}