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
          <a href="#">Tools</a>
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
    </div>
  );
};

export default SidebarMenu;
