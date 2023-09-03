import React from "react";
import "./FastToolCard.css";
import FastToolPopup from "./FastToolPopup";
import Dropzone from "react-dropzone";

import {useState} from "react";


export const FastToolCard = ({

    const : [buttonPopup, setButtonPopup] = useState(false),
    
    title,
    mui_icon,
    buttonText,
    link,

}) => {
    return (
        
        <div className = "card__container">
            
            <FastToolPopup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                <Dropzone onDrop = {(acceptedFile) => console.log(acceptedFile)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div style = {{
                                padding: "30%",
                                width: "90%",
                                height: "50%",
                                border: "2px dashed grey",
                                borderRadius: "5px",
                                alignItems: "center",
                                cursor: "pointer",
                                margin: 'auto',
                                display: 'flex',
                                flexDirection: 'row',
                            }} 
                              {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag and drop file here</p>
                            </div>
                        </section>
                    )}                    
                </Dropzone>                
            </FastToolPopup>

            <h4 className = "fast__tool_title">{title}</h4>
            <div className = "fast__tool_icon">{mui_icon}</div>
            {/*<a href = {link} className = "fast__tool_btn">{buttonText}</a>*/}
            <button onClick = {() => setButtonPopup(true)} className = "fast__tool_btn">{buttonText}</button>
        </div>
    )
}