import "./HashAndEnc.css";
import SplitPane from "react-split-pane";
import {DropzoneArea} from "material-ui-dropzone";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import {TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from "@mui/material/Menu";
//import SidebarMenu from "./components/Sidebarmenu";
//import loader from "./components/loader";

//import canopusproject_logo from "./assets/icons/canopusproject_logo.svg";

import {useCallback, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
//import {ArrowUpTrayIcon, XMarkIcon} from '@heroicons/react/24/solid';
import { Alert } from "@mui/material";
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';




const HashAndEnc = () => {

    const [retreivedData, setRetreivedData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [text, setText] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    

    const handleRequest = () => {
        setIsLoading(true);
        try {
            axios.get('http://flatron9996.pythonanywhere.com/hashing_and_enc', {params: {param1: selectedOption, param2: text}})
            .then((response) => {setRetreivedData(response.data);});
        }
        catch (err) {console.log(err.message)}
    }


    //=========================================================================================
    //ENCRYPTION FUNCTIONS
    //=========================================================================================

    const chooseEncryptionToHex = () => {
        setSelectedOption("to_hex")
        console.log(selectedOption)
    }
    const chooseEncryptionFromHex = () => {
        setSelectedOption("from_hex")
        console.log(selectedOption)
    }
    const chooseEncryptionToBinary = () => {
        setSelectedOption("to_binary")
        console.log(selectedOption)
    }
    const chooseEncryptionFromBinary = () => {
        setSelectedOption("from_binary")
        console.log(selectedOption)
    }

    const chooseEncryptionToBase32 = () => {
        setSelectedOption("to_base32")
        console.log(selectedOption)
    }
    const chooseEncryptionFromBase32 = () => {
        setSelectedOption("from_base32")
        console.log(selectedOption)
    }
    const chooseEncryptionToBase64 = () => {
        setSelectedOption("to_base64")
        console.log(selectedOption)
    }
    const chooseEncryptionFromBase64 = () => {
        setSelectedOption("from_base64")
        console.log(selectedOption)
    }
    const chooseEncryptionToBase85 = () => {
        setSelectedOption("to_base85")
        console.log(selectedOption)
    }
    const chooseEncryptionFromBase85 = () => {
        setSelectedOption("from_base85")
        console.log(selectedOption)
    }

    const chooseEncryptionUrlEncode = () => {
        setSelectedOption("url_encode")
        console.log(selectedOption)
    }
    const chooseEncryptionUrlDecode = () => {
        setSelectedOption("url_decode")
        console.log(selectedOption)
    }

    const chooseEncryptionGenerateKeys = () => {
        setSelectedOption("generasteKeys")
        console.log(selectedOption)
    }
    const chooseEncryptionLoadKeys = () => {
        setSelectedOption("load_keys")
        console.log(selectedOption)
    }
    const chooseEncryptionEncrypt = () => {
        setSelectedOption("encrypt")
        console.log(selectedOption)
    }
    const chooseEncryptionDecrypt = () => {
        setSelectedOption("decrypt")
        console.log(selectedOption)
    }

    const chooseEncryptionGenerateMD5 = () => {
        setSelectedOption("generate_md5")
        console.log(selectedOption)
    }
    const chooseEncryptionGenerateSHA1 = () => {
        setSelectedOption("generate_sha1")
        console.log(selectedOption)
    }
    const chooseEncryptionGenerateSHA256 = () => {
        setSelectedOption("generate_sha256")
        console.log(selectedOption)
    }
    const chooseEncryptionGenerateSHA512 = () => {
        setSelectedOption("generate_sha512")
        console.log(selectedOption)
    }

    //=========================================================================================
    //ENCRYPTION FUNCTIONS
    //=========================================================================================


    

    const showResults = () => {
       console.log(selectedOption)
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
                        <h2>Hashing and Encryption</h2>
                    </div>

                    <div className = "tool__description_content">
                        <p>Hashing helps encrypt and decrypt digital signatures used to 
                            authenticate message senders and receivers. In this scenario, 
                            a hash function transforms the digital signature before both 
                            the hashed value (known as a message digest) and the signature 
                            are sent in separate transmissions to the receiver.
                        </p>
                    </div>

                    <div className = "tool__description_content">
                        <p>Data encryption is a computing process that encodes 
                            plaintext/cleartext (unencrypted, human-readable data) into 
                            ciphertext (encrypted data) that is accessible only by 
                            authorized users with the right cryptographic key. Simply put, 
                            encryption converts readable data into some other form that 
                            only people with the right password can decode and view – and 
                            is a vital component of digital transformation.</p>
                    </div>


                    <TextField 
                        id = "margin-normal" 
                        label = "Paste your text here..." 
                        margin = "normal"
                        size = "small"
                        inputProps = {{maxlength: 512}}
                        fullWidth
                        onChange = {(e) => {
                            setText(e.target.value);
                        }}
                        InputProps = {{
                            endAdornment: (
                            <InputAdornment position="end">                                
                            </InputAdornment>
                            ),
                        }}
                    />

                    <br /><br />
                    <p>Choose a method to proceed:</p>

                    <div className = "encryption__methods">
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionToHex}>to hex</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionFromHex}>from hex</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionToBinary}>to binary</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionFromBinary}>from binary</Button>
                        </div>
                    </div>

                    <div className = "encryption__methods">
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionToBase32}>to base32</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionFromBase32}>from base32</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionToBase64}>to base64</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionFromBase64}>from base64</Button>
                        </div>
                    </div>

                    <div className = "encryption__methods">
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionToBase85}>to base85</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionFromBase85}>from base85</Button>
                        </div>
                    </div>

                    <div className = "encryption__methods">
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionUrlEncode}>url encode</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionUrlDecode}>url decode</Button>
                        </div>
                    </div>

                    <div className = "encryption__methods">
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionGenerateKeys}>generate keys</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionLoadKeys}>load keys</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionEncrypt}>encrypt</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionDecrypt}>decrypt</Button>
                        </div>
                    </div>

                    <div className = "encryption__methods">
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionGenerateMD5}>generate md5</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionGenerateSHA1}>generate sha1</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionGenerateSHA256}>generate sha256</Button>
                        </div>
                        <div className = "variant__button">
                            <Button variant = "outlined" size = "sm" onClick = {chooseEncryptionGenerateSHA512}>generate sha512</Button>
                        </div>
                    </div>



                    {/*Action buttons*/}
                    <div className = "tool__buttons">
                        <Stack spacing = {2} direction = "row">
                            <Button variant = "contained" onClick = {handleRequest}>Transform</Button>
                            <Button variant = "outlined" onClick = {showResults}>Check</Button>
                        </Stack>   
                    </div>                     
                </div>


                {/*================================================================================*/}
                {/*right half of the screen*/}
                {/*================================================================================*/}

                <div style = {{background: "white", height: "100%"}}>
                    <div className = "right__half">

                        <div className = "tool__description_header">
                            <h2>Output</h2>
                        </div>
                        <br />
                        <br />

                        <div className = "output__zone">
                            <p className = "output_text">{retreivedData}</p>
                        </div>

                    </div>
                    
                </div>
            </SplitPane>
        </div>
    );
};


export default HashAndEnc;
