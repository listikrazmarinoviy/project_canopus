import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "../assets/sidebar_buttons_about_page.css";

const SidebarButtonsAboutPage = () => {
  return (
    <div className="sidebar-buttons">
      <div className="sidebar-buttons-login">
        <Link to="/signup">
          <Button variant="contained" fullWidth="true">
            Join
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="contained" fullWidth="true">
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SidebarButtonsAboutPage;
