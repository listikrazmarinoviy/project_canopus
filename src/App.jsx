import './App.css';
import ToolsetHub from "./ToolsetHub";
import ImageUpload from "./components/FileUpload";
import SearchBar from "./components/SearchBar";


import Module from "./components/Module";
import LinuxHardeningModule from "./modules/LinuxHardeningModule";
import MobileSecurityModule from "./modules/MobileSecurityModule";
import PacketCaptureAndAnalysis from './modules/PacketCaptureAndAnalysis';
import ReverseEngineeringModule from './modules/ReverseEngineeringModule';
import ThreatHuntingModule from './modules/ThreatHuntingModule';
import WebApplicationTestingModule from './modules/WebApplicationTestingModule';

import GroupDashboard from "./main_pages/GroupDashboard";
import GroupCard from "./components/GroupCard";
import CardPost from "./components/CardPost";
import LearningPath from "./main_pages/LearningPath";
import PersonalAccountPage from "./main_pages/PersonalAccountPage";

import SignUpForm from "./components/SignUpForm";
import ToolInteractionPcap from "./toolsethub_pages/ToolInteractionPcap";
import GenerateKeys from "./toolsethub_pages/GenerateKeys";
import EmailAnalyzer from "./toolsethub_pages/EmailAnalyzer";
import HashAndEnc from "./toolsethub_pages/HashAndEnc"

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);


function App() {

  return (
      <div className = "App">
        <ToolsetHub />
      </div>

  );
}

export default App;
