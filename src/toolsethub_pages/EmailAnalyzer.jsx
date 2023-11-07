import "./GenerateKeys.css";
import SplitPane from "react-split-pane";
import {DropzoneArea} from "material-ui-dropzone";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import {TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
//import SidebarMenu from "./components/Sidebarmenu";
//import loader from "./components/loader";

import {MdCloudUpload, MdDelete} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';

//import canopusproject_logo from "./assets/icons/canopusproject_logo.svg";

import {useCallback, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
import { Alert } from "@mui/material";
import axios from 'axios';



//import "./tools/pcap_analyze.py";



const EmailAnalyzer = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [receivedData, setReceivedData] = useState("") 


    const onDrop = useCallback(acceptedFile => {

        console.log(acceptedFile)
        
        if (acceptedFile?.length) {
            setFile(previousFile => [
                ...previousFile,
                ...acceptedFile.map(file =>
                    Object.assign(file, {preview: URL.createObjectURL(file)})
                )
            ])
        }
    }, [])


    const removeFile = name => {
        setFile(file => file.filter(file => file.name !== name))
    }

    const handleSubmit = async e => {

        setIsLoading(true)

        console.log('Request was sent')
        

        const formData = new FormData();
        formData.append('file', file);

        axios.post("http://flatron9996.pythonanywhere.com/email_analyzer", formData)
            .then((response) => setReceivedData(response.data))
        
        setIsLoading(false)
    }


    return (
        <div className = "ToolInteractionPcap">
            <SplitPane split = "vertical" defaultSize = {960} maxSize = {960} minSize = {960}>

                {/*================================================================================*/}
                {/*left half of the screen*/}
                {/*================================================================================*/}
                
                <div style = {{background: "white", height: "100%"}} className = 'left__half'>

                   
                    {/*Tool description section*/}
                    <div className = "tool__description_header">
                        <h2>Email analyzer</h2>
                    </div>

                    <div className = "tool__description_content">
                        <p>RSA  is an asymmetric encryption algorithm that is widely 
                            used in many products and services. Asymmetric encryption 
                            uses a key pair that is mathematically linked to encrypt 
                            and decrypt data. A private and public key are created, 
                            with the public key being accessible to anyone and the 
                            private key being a secret known only by the key pair 
                            creator. With RSA, either the private or public key can 
                            encrypt the data, while the other key decrypts it. 
                            This is one of the reasons RSA is the most used asymmetric 
                            encryption algorithm.
                        </p>
                    </div>

                    <div className = "tool__description_content">
                        <p>RSA encryption has a number of different tasks that it is used 
                            for. One of these is digital signing for code and certificates. 
                            Certificates can be used to verify who a public key belongs to, 
                            by signing it with the private key of the key pair owner. This 
                            authenticates the key pair owner as a trusted source of 
                            information. Code signing is also done with the RSA algorithm. 
                            To ensure the owner is not sending dangerous or incorrect code 
                            to a buyer, the code is signed with the private key of the code 
                            creator. This verifies the code has not been edited maliciously 
                            in transit, and that the code creator verifies that the code 
                            does what they have said it does.</p>
                    </div>

                    <div className = "upload__form">

                        {/*<button className="close-btn" onClick = {() => props.setTrigger(false)}>Close</button>*/}
                        
                        <form
                        onClick = {() => document.querySelector(".input-field").click()}
                        >
                            <input 
                                type = "file" 
                                accept = '*/*' 
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
                            <button className = "proceed_button" onClick = {handleSubmit}>Proceed</button>
                            <button className="close_button" onClick = {() => props.setTrigger(false)}>Close</button>
                            <button className = "close_button" onClick = {() => console.log(receivedData)}>Log results</button>
                        </div>              
                            
                    </div>                    
                </div>


                {/*================================================================================*/}
                {/*right half of the screen*/}
                {/*================================================================================*/}

                <div style = {{background: "white", height: "100%"}}>
                    <div className = "right__half">

                        <div className = "tool__description_header">
                            <h2>The output is shown below:</h2>
                        </div>
                        <br />
                        <br />

                        <div className = "output__zone">
                            <p className = "output_text">{receivedData}</p>
                        </div>

                    </div>
                    
                </div>
            </SplitPane>
        </div>
    );
};


export default EmailAnalyzer;
