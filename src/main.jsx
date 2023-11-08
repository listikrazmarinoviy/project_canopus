import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'


import App from './App'
import LinuxHardeningModule from './modules/LinuxHardeningModule';
import MobileSecurityModule from './modules/MobileSecurityModule';
import PacketCaptureAndAnalysis from './modules/PacketCaptureAndAnalysis';
import ReverseEngineeringModule from './modules/ReverseEngineeringModule';
import ThreatHuntingModule from './modules/ThreatHuntingModule';
import WebApplicationTestingModule from './modules/WebApplicationTestingModule';

import EmailAnalyzer from './toolsethub_pages/EmailAnalyzer';
import GenerateKeys from './toolsethub_pages/GenerateKeys';
import HashAndEnc from './toolsethub_pages/HashAndEnc';
import ToolsetHub from './ToolsetHub';
//import ObfuscatedJs from './toolsethub_pages/ObfuscatedJs';
import ToolInteractionPcap from './toolsethub_pages/ToolInteractionPcap';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <Routes>
      <Route exact path = "/" element = {<ToolsetHub />} />
      <Route path = "/linux_hardening_module" element = {<LinuxHardeningModule />} />
      <Route path = "/mobile_security_module" element = {<MobileSecurityModule />} />
      <Route path = "/packet _capture_and_analysis" element = {<PacketCaptureAndAnalysis />} />
      <Route path = "/reverse_engineering" element = {<ReverseEngineeringModule />} />
      <Route path = "/threat_hunting" element = {<ThreatHuntingModule />} />
      <Route path = "/web_application_testing" element = {<WebApplicationTestingModule />} />

      <Route path = '/email_analyzer' element = {<EmailAnalyzer />} />
      <Route path = '/generate_keys' element = {<GenerateKeys />} />
      <Route path = '/hashing_and_encryption' element = {<HashAndEnc />} />
      {/*<Route path = '/obfuscated_js' element = {<ObfuscatedJs />} />*/}
      <Route path = '/tool_interaction_pcap' element = {<ToolInteractionPcap />} />
    </Routes>
  </Router>

)
