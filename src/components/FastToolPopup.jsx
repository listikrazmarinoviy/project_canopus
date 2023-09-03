import React from 'react'

import "./FastToolPopup.css";

export const FastToolPopup = (props) => {
    
  return (props.trigger) ? (
    <div className = "popup">
        <div className="popup__inner">
            <button className = "close__btn"
            onClick = {() => props.SetTrigger(false)}>
                close</button>
            { props.children }
        </div>
    </div>
    ) : ""; 
}

export default FastToolPopup