import "./ToolInteractionPcap.css";
import SplitPane from "react-split-pane";
import {DropzoneArea} from "material-ui-dropzone";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import SidebarMenu from "./components/Sidebarmenu";
import loader from "./components/loader";

//import canopusproject_logo from "./assets/icons/canopusproject_logo.svg";

import {useCallback, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
import { Alert } from "@mui/material";
import axios from 'axios';

//import "./tools/pcap_analyze.py";





const ToolInteractionPcap = () => {

    const [file, setFile] = useState([])

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

    //as an example, accepts only .pdf
    const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop, accept: ".", maxFiles: 1, maxSize: 5000000})

    const removeFile = name => {
        setFile(file => file.filter(file => file.name !== name))
    }

    const handleSubmit = async e => {

        //set loading state to true when post the data 
        setLoading(true)
        
        const url = "https://test_react_project.requestcatcher.com/test";
        const formData = new FormData()
        formData.append('file', file)

        fetch(url, {
            mode : 'no-cors',
            method: 'POST',
            body: formData
        }).then ((response) => response.json()).then((data) => 
            { console.log(data); }
        ).catch((err) => console.log(err.message))

        //set loading state to false when post is completed
    }

    let[loading, setLoading] = useState(false) 


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


                    {/*File upload section */}
                    <div className = "file__upload_area_description">
                        <h4>Paste your PCAP file below:</h4>
                    </div>

                    <div className = "file__upload_area">
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <div className = "inner__paste">
                                {isDragActive ? (
                                    <p>Drop the file here ...</p>
                                    ) : (
                                    <p>Drag and drop file here</p>
                                )}
                            </div>
                        </div>                        


                        {/*Preview section*/}
                        <ul className = "mt-6 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-12 gap-10">
                            {file.map(file => (
                                <li key = {file.name} className = "relative h-32 rounded-md shadow-lg">
                                    <button
                                      type = "button"
                                      className = "w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transtition-colors"
                                      onClick = {() => removeFile(file.name)}
                                      >
                                        <XMarkIcon className = "w-5 h-5 fill-white hover:fill-secondary-400 transition-colors" />
                                    </button>
                                    {file.name}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/*Action buttons*/}
                    <div className = "tool__buttons">
                        <Stack spacing = {2} direction = "row">
                            <Button variant = "contained" onClick = {handleSubmit}>Proceed</Button>
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
                    </div>
                    
                </div>
            </SplitPane>
        </div>
    );
};


export default ToolInteractionPcap;
