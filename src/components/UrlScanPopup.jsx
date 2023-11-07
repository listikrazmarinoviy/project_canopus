import React from 'react';
import "./UrlScanPopup.css";

import axios from 'axios';

import {useState} from 'react';
import {MdCloudUpload, MdDelete} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';

function UrlScanPopup(props) {

    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [receivedData, setReceivedData] = useState("")
    const [jsonedData, setJsonedData] = useState("")
    const [loading, setIsLoading] = useState(false)


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
        <div className = "output_field">
            <div className = "popup">

                <div className = "result_field">
                    <h3>The output of URL scan:</h3>
                    <br />
                    {receivedData}

                    <div className = "action_buttons">
                        <button className="close_button" onClick = {() => props.setTrigger(false)}>Close</button>
                        <button className = "close_button" onClick = {() => console.log(receivedData)}>Log results</button>
                    </div> 

                </div>

                {props.children}
            </div>
        </div>
    ) : "";
}

export default UrlScanPopup