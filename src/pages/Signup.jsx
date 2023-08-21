import {
  Button,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";

import "../assets/login_signup.css";

const Signup = () => {
  return (
    <div id="container_signup_login">
      <div className="logo_text">
        <div className="logo_text__align-center">
          <img
            src="src\assets\images\canopusproject_logo 1.png"
            alt="Menu Item Icon"
          />
          <h1>
            Join the biggest <span className="title__span">cybersecurity</span>
            <br />
            platform
          </h1>
        </div>
      </div>
      <div className="forms">
        <h3>
          Create a Project <span className="title__span">Canopus</span> account
        </h3>
        <TextField
          required
          id="outlined-required"
          size="small"
          label="Email address"
        />
        <TextField
          required
          id="outlined-required"
          size="small"
          label="Password"
        />
        <TextField
          required
          id="outlined-required"
          size="small"
          label="Confirm password"
        />
        <div className="forms__flex-row">
          <TextField
            required
            id="outlined-required"
            size="small"
            label="Account name"
          />
          <TextField id="outlined-required" size="small" label="Company name" />
        </div>
        <FormGroup>
          <FormControlLabel
            required
            control={<Checkbox size="small" />}
            label={
              <span className="label-text">
                I agree with <Link to="/termsofuse">Terms of use</Link>
              </span>
            }
          />
          <FormControlLabel
            required
            control={<Checkbox size="small" />}
            label={
              <span className="label-text">
                I agree with{" "}
                <Link to="/privacypolicy">Project Canopus Privacy Policy</Link>
              </span>
            }
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={
              <span className="label-text">
                I would like to receive newsletters from Project Canopus
              </span>
            }
          />
        </FormGroup>
        <Button variant="contained">Continue</Button>
        <Link to="/login">
          <Button variant="text" fullWidth="true">
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
