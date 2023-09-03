import React from 'react'

import "./FastToolFieldPopup.css";

export const FastToolFieldPopup = (props) => {
  return (props.trigger) ? (
    <div className = "popup">
        <div className="popup__inner">
            <h3>The output is shown below:</h3>
            <button className = "close__btn"
            onClick = {() => props.SetTrigger(false)}> {/*something is wrong here*/}
                close</button>
            { props.children }
        </div>
    </div>
    ) : <p>No input</p>; 
}

export default FastToolFieldPopup