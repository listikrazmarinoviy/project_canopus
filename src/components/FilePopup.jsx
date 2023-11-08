import React from 'react';
import "./FilePopup.css";

import axios from 'axios';

import {useState} from 'react';
import {MdCloudUpload, MdDelete} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';

function FilePopup(props) {

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
        <div className = "combined_field">
            <div className = "popup">
                <div className="popup-inner">

                    {/*<button className="close-btn" onClick = {() => props.setTrigger(false)}>Close</button>*/}
                    
                    <form
                    onClick = {() => document.querySelector(".input-field").click()}
                    >
                        <input 
                            type = "file" 
                            accept = 'image/*' 
                            className = 'input-field' 
                            hidden
                            onChange = {({target: {files}}) => {
                                files[0] && setFileName(files[0].name)
                                if(files) {
                                    setFile(files[0])
                                }
                            }}
                        />

                        {file ? 
                            <img src = {file} width = {150} height = {150} alt = {fileName}/> 
                            : 
                            <>
                            <MdCloudUpload color = "#1475cf" size = {100}/>
                            <p>Click to select a file</p>
                            </>
                        }
                    </form>

                    <section className = "uploaded-row">
                        <AiFillFileImage color = "#1475cf"/>
                        <span className = 'upload-content'>
                            {fileName}
                            <MdDelete 
                            onClick = {() => {
                                setFileName("No file selected")
                                setImage(null)
                            }}                        
                            />
                        </span>
                    </section>

                    <div className = "action_buttons">
                        <button className = "proceed_button" onClick = {CheckImageSteg}>Proceed</button>
                        <button className="close_button" onClick = {() => props.setTrigger(false)}>Close</button>
                        <button className = "close_button" onClick = {() => console.log(receivedData)}>Log results</button>
                    </div>              
                    
                </div>

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

export default FilePopup