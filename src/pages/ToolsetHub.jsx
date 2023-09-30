import "./ToolsetHub.css";

import {Button} from "@mui/material";
import "./components/Sidebarmenu.css";

import Grid from "@mui/material/Grid";
import axios from 'axios';

import {Card} from "./components/Card";
import {FastToolCard} from "./components/FastToolCard";
import {SearchBar} from "./components/SearchBar";
import {FastToolPopup} from "./components/FastToolPopup";
import {TextField } from '@mui/material';
import {useState} from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import HorizontalScroll from "react-scroll-horizontal";

import ImageIcon from '@mui/icons-material/Image';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const hashes = [
  {value: "MD5", label: "MD5"},
  {value: "SHA1", label: "SHA1"},
  {value: "SHA256", label: "SHA256"},
  {value: "SHA512", label: "SHA512"}
]


const ToolsetHub = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [ipAddress, setIPAddress] = useState(null);
  const [retreivedData, setRetreivedData] = useState(null);

  const handleChangeIP = event => {
    setIPAddress(event.target.value);
    console.log('value is: ', event.target.value);
  }

  const checkIPAddress = () => {
    try {
        axios.get('http://flatron9996.pythonanywhere.com/ip_analyze', {params: {ip_address: ipAddress}})
        .then((response) => {setRetreivedData(response.data);})
        .then(console.log(retreivedData));
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
                  link = "cardPage"/>
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
              InputProps = {{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button 
                      variant = "outlined" 
                      color = "primary"
                      onClick = {() => setButtonPopup(true)}>
                        Scan
                    </Button>
                  </InputAdornment>
                ),
              }}
            />

            <div>
                <h3 className = "sections__title">
                  Decipher hash value
                </h3>
            </div>
            <TextField
                id = "margin-normal"
                label = "Paste your hash value here..."
                margin = "normal"
                size = "small"
                fullWidth
                InputProps = {{
                  endAdornment: (
                    <InputAdornment position = "end">
                      <Button variant = "outlined">Decipher</Button>
                    </InputAdornment>
                  ),}}
            />           
          

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
                          variant = "outlined" 
                          onClick = {checkIPAddress}>Check IP</Button>
                      </InputAdornment>
                    )
                  }}
              />
          </div>

          {/*sections__bottom_right*/}
          <div className = "sections__bottom_right">
              <Grid container rowSpacing = {1} columnSpacing = {{xs: 1, sm:2, md: 3}}>
                  <Grid item xs = {6}>
                    <FastToolCard 
                        title = "File scan"   
                        mui_icon = { <InsertDriveFileIcon 
                            fontSize = "inherit"/> }                                     
                        buttonText = "Choose file"
                        />
                  </Grid>      
                  <Grid item xs = {6}>
                    <FastToolCard 
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
          </div>          
        </div>
        
      </div> 
    </div>
  );
};

export default ToolsetHub;
