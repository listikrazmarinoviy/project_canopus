import React from 'react';
import "./DecipherHashPopup.css";

import axios from 'axios';

import {useState} from 'react';

function DecipherHashPopup(props) {

    const [file, setFile] = useState(null)
    const [receivedData, setReceivedData] = useState("")


    const CheckImageSteg = () => {
        setIsLoading(true)

        const formData = new FormData();
        formData.append('file', file);

        axios.post("http://flatron9996.pythonanywhere.com/image_steg", formData)
            .then((response) => setReceivedData(response.data))

        data_to_json = JSON.parse(receivedData)
        setJsonedData(data_to_json)
        
        setIsLoading(false)
    }






    return (props.trigger) ? (
        <div className = "combined_field">
            <div className = "popup">
                {/*<div className="popup-inner">               
                    <div className = "action_buttons">
                        <button className = "proceed_button" onClick = {CheckImageSteg}>Proceed</button>
                        <button className="close_button" onClick = {() => props.setTrigger(false)}>Close</button>
                        <button className = "close_button" onClick = {() => console.log(receivedData)}>Log results</button>
                    </div>                           
                </div>*/}

                {/*output field*/}
                <div className = "result_field">
                    <h3>The output is shown below:</h3>
                    <br />
                    {receivedData}
                </div>

                {props.children}
            </div>
        </div>
    ) : "";
}

export default DecipherHashPopup