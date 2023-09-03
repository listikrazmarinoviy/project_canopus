import React from 'react';

import "./GroupCard.css";

export const GroupCard = ({
    image,
    name,
    description,
    //link,
}) => {  
    
  return (
    <div className = "group__card">
        <img className = "group__image" source = {image} />

        <div className = "group__name_description">
            <h4 className = "group__name">{name}</h4>
            <p className = "group__description">{description}</p>
        </div>
    </div>
  )
}

export default GroupCard