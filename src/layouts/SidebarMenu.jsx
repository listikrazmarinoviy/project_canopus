import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "../assets/sidebar_menu.css";

const SidebarMenu = () => {
  return (
    <div id="sidebar">
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
          <img
            src="src\assets\images\icons8-circle-64.png"
            alt="Menu Item Icon"
          />
          <a href="#">Home</a>
        </li>
        <li className="list-item">
          <img
            src="src\assets\images\icons8-circle-64.png"
            alt="Menu Item Icon"
          />
          <a href="#">News</a>
        </li>
        <li className="list-item">
          <img
            src="src\assets\images\icons8-circle-64.png"
            alt="Menu Item Icon"
          />
          <Link to = "toolsethub"><p>Toolset Hub</p></Link>
        </li>
        <li className="list-item">
          <img
            src="src\assets\images\icons8-circle-64.png"
            alt="Menu Item Icon"
          />
          <a href="#">Groups</a>
        </li>
        <li className="list-item">
          <img
            src="src\assets\images\icons8-circle-64.png"
            alt="Menu Item Icon"
          />
          <a href="#">Activity stream</a>
        </li>
        <li className="list-item">
          <img
            src="src\assets\images\icons8-circle-64.png"
            alt="Menu Item Icon"
          />
          <a href="#">Learn</a>
        </li>
      </ul>
      <div className="sidebar-buttons">
        <Link to="about">
          <p>About Project Canopus</p>
        </Link>
        <div className="divider"></div>
        <div className="sidebar-buttons-login">
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

export default SidebarMenu;
