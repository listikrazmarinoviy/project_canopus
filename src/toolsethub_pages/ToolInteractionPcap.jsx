import "./ToolInteractionPcap.css";
import SplitPane from "react-split-pane";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
//import SidebarMenu from "./components/SidebarMenu";
//import loader from "./components/loader";

//import canopusproject_logo from "./assets/icons/canopusproject_logo.svg";

import {useCallback, useState, useEffect} from 'react';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
import axios from 'axios';

import {MdCloudUpload, MdDelete} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';

//import "./tools/pcap_analyze.py";





const ToolInteractionPcap = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [receivedData, setReceivedData] = useState("")


    const manage_file = () => {
        const lines = receivedData.split('\n');
    }


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

        axios.post("http://flatron9996.pythonanywhere.com/pcap_file_analyzer", formData)
            .then((response) => setReceivedData(response.data))
            manage_file()
        
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
                        <h2>PCAP file analysis</h2>
                    </div>

                    <div className = "tool__description_content">
                        <p>This tool is created on the basis of Machine Learning model that could detect the 
                            vulnerabilities in your database with accuracy of 95%. The Machine Learning model was 
                            trained on the dataset which consists of 35.668 examples of vulnerable and potentially 
                            safe database structures.
                        </p>
                    </div>

                    <div className = "tool__description_content">
                        <p>To use this tool, you need to provide information about your database below.</p>
                    </div>

                    <div className = "tool__description_content">
                        <p>Using this tool, you agree to provide us with the data that you paste below and explore 
                            it; no data you past below will be stored in our system or anywhere else.
                        </p>
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


                    {/*Action buttons*/}
                    <div className = "tool__buttons">
                        <Stack spacing = {2} direction = "row">
                            {/*<Button variant = "contained" onClick = {handleSubmit}>Proceed</Button>*/}
                            {/*<Button variant = "outlined" onClick = {() => removeFile(file.name)}>Clear</Button>*/}                
                        </Stack>   
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

                        {receivedData}

                    </div>
                    
                </div>
            </SplitPane>
        </div>
    );
};


export default ToolInteractionPcap;
