import React from 'react'

import "./SignUpForm.css";

import {Button, TextField, FormControlLabel, FormGroup, Checkbox} from "@mui/material";



export const SignUpForm = () => {

  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  }

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  }

  return (
    <div className = "sign__up_box">
        <h3 className = "box__header">Create a Project Canopus account</h3>

        <TextField
          required
          id="outlined-required"
          size="small"
          label="Email address"
        />
        <br />

        <TextField
          required
          id="outlined-required"
          size="small"
          label="Password"
        />
        <br />

        <TextField
          required
          id="outlined-required"
          size="small"
          label="Enter password one more time"
        />
        <br />

        <div className = "row__text_fields">
            <TextField
                required
                id="outlined-required"
                size="small"
                label="Account name"
            />

            <TextField
                required
                id="outlined-required"
                size="small"
                label="Company name"
            />
        </div>

        <div className = "check__boxes">

            <FormGroup>
                <FormControlLabel required control = { <Checkbox /> } 
                  label = "I agree with Terms of use" />
                
                <FormControlLabel required control = { <Checkbox /> } 
                  label = "I agree with Project Canopus Privacy Policy" />

                <FormControlLabel control = { <Checkbox /> } 
                  label = "I would like to receive newsletters" />
            </FormGroup>

        </div>

        <Button type = "text" variant = "contained">Sign up</Button>

        <br />

        <Button type = "text" variant = "outlined">Sign in</Button>

    </div>
  )
}

export default SignUpForm