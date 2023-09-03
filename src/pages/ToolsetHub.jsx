import "./ToolsetHub.css";

import {Button} from "@mui/material";
import "./components/Sidebarmenu.css";

import Grid from "@mui/material/Grid";

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

  const [buttonPopup, setButtonPopup] = useState(false)

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
                  title = "Basic test to define whether your server is easy to hack" 
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
                  title = "Basic test to define whether your server is easy to hack" 
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
                Create a hash
              </h3>
              <TextField
                  id = "margin-normal"
                  label = "Paste text to create a hash..."
                  margin = "normal"
                  size = "small"
                  fullWidth
                  InputProps = {{
                    endAdornment: (
                      <InputAdornment position = "end">
                        <Button variant = "outlined">Create a hash</Button>
                      </InputAdornment>
                    )
                  }}
              />

              <TextField
                  id = "select_hash"
                  select
                  label = "Select hash encryption"
                  defaultValue = "MD5"
              >
                {hashes.map((option) =>(
                  <MenuItem key = {option.value} value = {option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>  
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
                  InputProps = {{
                    endAdornment: (
                      <InputAdornment position = "end">
                        <Button variant = "outlined">Check IP</Button>
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