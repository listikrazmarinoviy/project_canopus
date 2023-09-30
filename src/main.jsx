import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Terms from "./pages/Terms.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import About from "./pages/About.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import Contact from "./pages/Contact.jsx";
import Activities from "./pages/Activities.jsx";
import Learn from "./pages/Learn.jsx";
import Groups from "./pages/Groups.jsx";
import Tools from "./pages/Tools.jsx";
import News from "./pages/News.jsx";
import ToolsetHub from "./pages/ToolsetHub.jsx";
import "./assets/styles.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Signup />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/termsofuse" element={<Terms />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/news" element={<News />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/toolsethub" element={<ToolsetHub />} />
    </Routes>
  </Router>
);

