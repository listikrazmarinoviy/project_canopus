import "./ToolsetHub.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';

import {Button} from "@mui/material";
import "./components/Sidebarmenu.css";

import Grid from "@mui/material/Grid";
//import axios from 'axios';

import {Card} from "./components/Card";
import {SearchBar} from "./components/SearchBar";
import {TextField } from '@mui/material';
import {useState} from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import HorizontalScroll from "react-scroll-horizontal";
import axios from "axios";

import ImageIcon from '@mui/icons-material/Image';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import LinuxHardeningModule from "./modules/LinuxHardeningModule";
import MobileSecurityModule from "./modules/MobileSecurityModule";
import PacketCaptureAndAnalysis from "./modules/PacketCaptureAndAnalysis";
import ReverseEngineeringModule from "./modules/ReverseEngineeringModule";
import ThreatHuntingModule from "./modules/ThreatHuntingModule";
import WebApplicationTestingModule from "./modules/WebApplicationTestingModule";
import FilePopup from "./components/FilePopup";
import UrlScanPopup from "./components/UrlScanPopup";
import FileScanPopup from "./components/FileScanPopup";


const hashes = [
  {value: "MD5", label: "MD5"},
  {value: "SHA1", label: "SHA1"},
  {value: "SHA256", label: "SHA256"},
  {value: "SHA512", label: "SHA512"}
]


const ToolsetHub = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [fileScanPopup, setFileScanPopup] = useState(false);
  const [urlButtonPopup, setUrlButtonPopup] = useState(false);

  const [retreivedUrl, setRetreivedUrl] = useState(null);
  const [retreivedHash, setRetreivedHash] = useState(null);
  const [retreivedIPAnalyze, setRetreivedIPAnalyze] = useState(null);

  const [urlToScan, setUrlToScan] = useState(null);
  const [ipAddress, setIPAddress] = useState(null);
  const [hashValue, setHashValue] = useState(null);



  const FastToolCard = ({ title, mui_icon, buttonText, }) => {
    return (      
        <div className = "card__container">
  
            <h4 className = "fast__tool_title">{title}</h4>
            <div className = "fast__tool_icon">{mui_icon}</div>
            <button onClick = {() => setButtonPopup(true)} className = "fast__tool_btn">{buttonText}</button>
        </div>
    )
  }

  const MediumFastToolCard = ({ title, mui_icon, buttonText}) => {
    return (
      <div className = "medium__card_container">
        <h4 className = "fast__tool_title">{title}</h4>
        <div className = "fast__tool_icon">{mui_icon}</div>
        <button onClick = {() => setFileScanPopup(true)} className = "medium__fast_tool_btn">{buttonText}</button>
      </div>
    )
  }


  {/*======================================================================================}*/}
  //Handle events
  {/*======================================================================================}*/}

  const handleChangeUrl = event => {
    setUrlToScan(event.target.value);
    console.log('value is: ', event.target.value);
  }

  const handleChangeHash = event => {
    setHashValue(event.target.value);
    console.log('value is: ', event.target.value);
  }

  const handleChangeIP = event => {
    setIPAddress(event.target.value);
    console.log('value is: ', event.target.value);
  }




  const checkUrl = () => {
    try {
      axios.get('http://flatron9996.pythonanywhere.com/malicious_url_scan', {params: {url_to_scan: urlToScan}})
      .then((response) => {setRetreivedUrl(response.data);})
      .then(console.log(retreivedUrl))
    }
    catch (err) {console.log(err.message)}
  }

  const checkIPAddress = () => {
    try {
        axios.get('http://flatron9996.pythonanywhere.com/ip_analyze', {params: {ip_address: ipAddress}})
        .then((response) => {setRetreivedIPAnalyze(response.data);})
        .then(console.log(retreivedIPAnalyze));
    }
    catch (err) {console.log(err.message)}
  }

  const decipherHashValue = () => {
    try {
      axios.get('http://flatron9996.pythonanywhere.com/hash_type', {params: {hash: hashValue}})
      .then((response) => {setRetreivedHash(response.data);})
      .then(console.log(retreivedHash));
    }
    catch (err) {console.log(err.message)}
  }

  return (
    <div>
      <div className = "sections">
        <div className = "sections__upper_part">
          <h2 className = "sections__title--backgroundColorRed">
            Toolset hub
          </h2>
          <SearchBar />
        </div>

        <h3 className = "sections__title">Official toolset</h3>

        <div className = "sections__tools_list">
          <HorizontalScroll>
              <Card 
                  title = "Email analyzer" 
                  description = "This is the machine learning model that has been trained to determine, how is it likely that your server will be hacked"
                  buttonText = "Continue" 
                  link = "PcapTool"/>
              <Card 
                  title = "Key generator" 
                  description = "This is the machine learning model that has been trained to determine, how is it likely that your server will be hacked"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "Hashing and encryption" 
                  description = "This is the machine learning model that has been trained to determine, how is it likely that your server will be hacked"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "Obfuscated JS" 
                  description = "This is the machine learning model that has been trained to determine, how is it likely that your server will be hacked"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "PCAP file analyzer" 
                  description = "This is the machine learning model that has been trained to determine, how is it likely that your server will be hacked"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "Basic test to define whether your server is easy to hack" 
                  description = "This is the machine learning model that has been trained to determine, how is it likely that your server will be hacked"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "Basic test to define whether your server is easy to hack" 
                  description = "This is the machine learning model that has been trained to determine, how is it likely that your server will be hacked"
                  buttonText = "Continue" 
                  link = "cardPage"/>
          </HorizontalScroll>
          
                        
        </div>

        <div>
          <h3 className = "sections__title">
            Modules and applications
          </h3>
        </div>

        <div className = "sections__tools_list">
          <HorizontalScroll>
              <Card 
                  title = "Linux hardening" 
                  description = "The collection of material to test your linux OS security"
                  buttonText = "Continue" 
                  link = "LinuxHardeningModule"/>
              <Card 
                  title = "Mobile security" 
                  description = "Mobile security becomes more crusial these days. We collected materials that provide you with information about security the mobile applications"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "Packet capture and analysis" 
                  description = "Web-based tools that deal with Internet packet routing and tests"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "Reverse engineering" 
                  description = "Want to know the architecture of application that you use? Reverse engineering techniques can help you"
                  buttonText = "Continue" 
                  link = "/modules/ReverseEngineeringModule"/>
              <Card 
                  title = "Threat hunting" 
                  description = "Get ready to the latest threats and find the information about them in this module"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "Web application testing" 
                  description = "API, Docker, frameworks - this is what web applications are built with. Test them to find possible vulnerabilities"
                  buttonText = "Continue" 
                  link = "cardPage"/>
              <Card 
                  title = "Basic test to define whether your server is easy to hack" 
                  description = "This is the machine learning model that has been trained to determine, how is it likely that your server will be hacked"
                  buttonText = "Continue" 
                  link = "cardPage"/>
          </HorizontalScroll>            
        </div>

        <div>
          <h3 className = "sections__title">
            URL scan
          </h3>
        </div>
        <p>*can take up to 1 minute to scan</p>



        {/*sections__bottom_tools*/}
        <div className = "sections__bottom_tools">
          {/*sections__bottom_left*/}
          <div className = "sections__bottom_left">
            <TextField 
              id = "margin-normal" 
              label = "Paste your URL here..." 
              margin = "normal"
              size = "small"
              inputProps = {{maxlength: 150}}
              fullWidth
              onChange = {handleChangeUrl}
              value = {urlToScan}
              InputProps = {{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button 
                      variant = "contained" 
                      color = "primary"
                      onClick = {checkUrl}>
                        Scan
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <div className = "output_result_area">
              {retreivedUrl}
            </div>

            <div>
                <h3 className = "sections__title">
                  Check hash type
                </h3>
            </div>
            <TextField
                id = "margin-normal"
                label = "Paste your hash value here..."
                margin = "normal"
                size = "small"
                fullWidth
                onChange = {handleChangeHash}
                value = {hashValue}
                InputProps = {{
                  endAdornment: (
                    <InputAdornment position = "end">
                      <Button 
                        variant = "contained"
                        onClick = {decipherHashValue}>
                          Check
                      </Button>
                    </InputAdornment>
                  ),}}
            />
            <div className = "output_result_area">
              {retreivedHash}
            </div>

         

            <div>
                <h3 className = "sections__title">
                    Check whether IP is malicious
                </h3>
            </div>      
            <TextField
                  id = "margin-normal"
                  label = "Paste IP address..."
                  margin = "normal"
                  size = "small"
                  fullWidth
                  onChange = {handleChangeIP}
                  value = {ipAddress}
                  InputProps = {{
                    endAdornment: (
                      <InputAdornment position = "end">
                        <Button 
                          variant = "contained" 
                          onClick = {checkIPAddress}>Check IP</Button>
                      </InputAdornment>
                    )
                  }}
              />
              <div className = "output_result_area">
                {retreivedIPAnalyze}
              </div>
          </div>

          {/*sections__bottom_right*/}
          <div className = "sections__bottom_right">
              <Grid container rowSpacing = {1} columnSpacing = {{xs: 1, sm:2, md: 3}}>
                  <Grid item xs = {12}>
                    <MediumFastToolCard 
                        title = "File scan"   
                        mui_icon = { <InsertDriveFileIcon 
                            fontSize = "inherit"/> }                                     
                        buttonText = "Choose file"
                        />
                  </Grid>      
   
                  <Grid item xs = {6}>
                    <FastToolCard 
                        title = "Steganography (Image)" 
                        mui_icon = { <ImageIcon 
                          fontSize = "inherit"/> }                                      
                        buttonText = "Choose file" 
                        />
                  </Grid>    
                  <Grid item xs = {6}>
                    <FastToolCard 
                        title = "Steganography (Audio)"
                        mui_icon = { <AudioFileIcon 
                          fontSize = "inherit"/> }
                        buttonText = "Choose file" 
                        />
                  </Grid>             
              </Grid>


              {/*POPUPS*/}
              <FilePopup trigger = {buttonPopup} setTrigger = {setButtonPopup}></FilePopup>
              <FileScanPopup trigger = {fileScanPopup} setTrigger = {setFileScanPopup}></FileScanPopup>
              <UrlScanPopup trigger = {urlButtonPopup} setTrigger = {setUrlButtonPopup}></UrlScanPopup>
          </div>          
        </div>
        
      </div> 
    </div>
  );
};

export default ToolsetHub;