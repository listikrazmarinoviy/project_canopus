import React from 'react'

import "./CardPost.css"

export const CardPost = ({
    header,
    image,
    content,
    hashtags
}) => {
  return (
    <div className = "post__bloc">

        <img className = "post__image" src = {image} />

        <div className = "post__content">
            <h2 className = "post__header">{header}</h2>
            <p className = "post__content">{content}</p>
            <p className = "hash__tags">{hashtags}</p>
        </div>        
    </div>
  )
}

export default CardPost