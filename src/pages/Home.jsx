import SidebarMenu from "../layouts/SidebarMenu";
import "../assets/home.css";
import "../assets/sidebar_menu.css";

const Home = () => {
  return (
    <div id="container">
      <SidebarMenu />
      <div className="home-text">
        <p>Welcome to the</p>
        <h1 className="title">
          Project <span className="title__span">Canopus</span>
        </h1>
        <p>
          Imagine the world, safe of
          <br />
          cyber-threats
        </p>
      </div>
    </div>
  );
};

export default Home;
