import React from 'react'

import "./Module.css"

export const Module = ({
    header,
    description,
    buttonText,
    links,
    link,
    icon
}) => {
  return (
    <div className = "module__box">

      <h3 className = "module__header">{header}</h3>

      <div className = "description__and__icon">

        <p className = "module__description">{description}</p>
        <img className = "module__icon" src = {icon}/>

      </div>

      <div className = "links__and__button">

        <p className = "module__links">{links}</p>
        <a href = {link} className = "module__button">{buttonText}</a>

      </div>

    </div>
  )
}

export default Module