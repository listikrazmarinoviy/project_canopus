import React from 'react'

import "./ThreatHuntingModule.css";

import {Module } from "../components/Module";

export const ThreatHuntingModule = () => {
  return (
    <div className = "modules__page">

        {/*header and description part*/}
        <h3 className = "header">Threat hunting</h3>



        {/*modules list*/}
        <div className = "modules__list">
            <Module 
                header = "MITRE ATT&CK"
                description = "MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations of cybersecurity threats. They’re displayed in matrices that are arranged by attack stages, from initial system access to data theft or machine control. There are matrices for common desktop platforms – Linux, macOS and Windows, technologies like cloud, containers, network, ICS, and mobile platforms."
                buttonText = "Continue on website"
                links = "The general information is available via the link: https://attack.mitre.org/resources/"
                link = "https://attack.mitre.org/"
                icon = "https://www.cybertronium.com/portals/0/mitre.png"
            /> 
            <Module 
                header = "osquery"
                description = "osquery is an operating system instrumentation framework for Windows, OS X (macOS), and Linux. The tools make low-level operating system analytics and monitoring both performant and intuitive. osquery exposes an operating system as a high-performance relational database. This allows you to write SQL queries to explore operating system data. With osquery, SQL tables represent abstract concepts such as running processes, loaded kernel modules, open network connections, browser plugins, hardware events or file hashes."
                buttonText = "Continue on website"
                links = "The official documentation is available via the link: https://osquery.readthedocs.io/en/stable/"
                link = "https://osquery.io/"
                icon = "https://pbs.twimg.com/profile_images/567732844382801920/mTpcnHEJ_400x400.png"
            /> 
            <Module 
                header = "Flare"
                description = "Flare is a network analytic framework designed for data scientists, security researchers, and network professionals. Written in Python, it is designed for rapid prototyping and development of behavioral analytics, and intended to make identifying malicious behavior in networks as simple as possible."
                buttonText = "Continue on GitHub"
                links = "The official GetHub repository is available via the link: https://github.com/austin-taylor/flare"
                link = "https://github.com/austin-taylor/flare"
                icon = "https://github.com/austin-taylor/flare/raw/master/docs/source/logo.png"
            /> 
            <Module 
                header = "NIST Cybersecurity Framework"
                description = "The NIST Cybersecurity Framework can help an organization begin or improve their cybersecurity program. Built off of practices that are known to be effective, it can help organizations improve their cybersecurity posture. It fosters communication among both internal and external stakeholders about cybersecurity, and for larger organizations, helps to better integrate and align cybersecurity risk management with broader enterprise risk management processes as described in the NISTIR 8286 series."
                buttonText = "Continue on website"
                links = "The official website is available via the link: https://www.nist.gov/cyberframework/getting-started/quick-start-guide"
                link = "https://www.nist.gov/cyberframework"
                icon = "https://www.securitycompass.com/wp-content/uploads/NIST-Logo.png"
            /> 
        </div>
                       
    </div>
  )
}

export default ThreatHuntingModule;