import "../assets/account_sidebar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div id="account_sidebar">
      <div className="list-item">
        <img
          src="src\assets\images\canopusproject_logo 1.png"
          alt="Menu Item Icon"
        />
        <h2 className="title">
          Project <span className="title__span">Canopus</span>
        </h2>
      </div>
      <ul>
        <li className="list-item">
          <a href="#">Create Post</a>
        </li>
        <li className="list-item">
          <a href="#">Find A Friend</a>
        </li>
        <li className="list-item">
          <a href="#">Join A Group</a>
        </li>
        <li className="list-item">
          <a href="#">Manage Account</a>
        </li>
        <li className="list-item">
          <a href="#">Activity stream</a>
        </li>
        <li className="list-item">
          <a href="#">Tools</a>
        </li>
      </ul>
      <div className="account_sidebar-buttons">
        <div className="account_sidebar-login">
          <Link to="signup">
            <Button variant="contained" fullWidth="true">
              Join
            </Button>
          </Link>
          <Link to="login">
            <Button variant="contained" fullWidth="true">
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
