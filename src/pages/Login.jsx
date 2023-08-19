import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import "../assets/login_signup.css";

const Login = () => {
  return (
    <div id="container_signup_login">
      <div className="logo_text">
        <div className="logo_text__align-center">
          <img
            src="src\assets\images\canopusproject_logo 1.png"
            alt="Menu Item Icon"
          />
          <h1>
            Welcome to the biggeest <br />
            <span className="title__span">cybersecurity</span>
            platform
          </h1>
        </div>
      </div>
      <div className="forms">
        <h3>
          Sign in to Project <span className="title__span">Canopus</span>{" "}
          account
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
        <Button variant="contained">Sign in</Button>
        <Link to="/signup">
          <Button variant="text" fullWidth="true">
            Create account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
