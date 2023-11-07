import "./GenerateKeys.css";
import SplitPane from "react-split-pane";
import {DropzoneArea} from "material-ui-dropzone";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
//import SidebarMenu from "./components/Sidebarmenu";
//import loader from "./components/loader";

//import canopusproject_logo from "./assets/icons/canopusproject_logo.svg";

import {useCallback, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
import { Alert } from "@mui/material";
import axios from 'axios';



//import "./tools/pcap_analyze.py";



const GenerateKeys = () => {

    const [retreivedData, setRetreivedData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleRequest = () => {
        setIsLoading(true);
        try {
            axios.get('http://flatron9996.pythonanywhere.com/generate_keys')
            .then((response) => {setRetreivedData(response.data);});
        }
        catch (err) {console.log(err.message)}
    }
    

    const showResults = () => {
       console.log(retreivedData)
    }


    {/*useEffect(() => {
        handleRequest()
    }, []);*/}


    return (
        <div className = "ToolInteractionPcap">
            <SplitPane split = "vertical" defaultSize = {960} maxSize = {960} minSize = {960}>

                {/*================================================================================*/}
                {/*left half of the screen*/}
                {/*================================================================================*/}
                
                <div style = {{background: "white", height: "100%"}} className = 'left__half'>

                   
                    {/*Tool description section*/}
                    <div className = "tool__description_header">
                        <h2>RSA keys generator</h2>
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

                    <div className = "tool__description_content">
                        <p>You can generate a private and public key pair and use it for 
                            verification of information.
                        </p>
                    </div>


                    {/*Action buttons*/}
                    <div className = "tool__buttons">
                        <Stack spacing = {2} direction = "row">
                            <Button variant = "contained" onClick = {handleRequest}>Generate Keys</Button>
                            <Button variant = "outlined" onClick = {showResults}>Show result</Button>           
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
                        <br />

                        <div className = "output__zone">
                            <p className = "output__text">{retreivedData}</p>
                        </div>

                    </div>
                    
                </div>
            </SplitPane>
        </div>
    );
};


export default GenerateKeys;
