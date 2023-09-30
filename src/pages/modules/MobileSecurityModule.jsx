import React from 'react'

import "./MobileSecurityModule.css";

import {Module } from "../components/Module";

export const MobileSecurityModule = () => {
  return (
    <div className = "modules__page">

        {/*header and description part*/}
        <h3 className = "header">Mobile security</h3>



        {/*modules list*/}
        <div className = "modules__list">
            <Module 
                header = "OWASP MASVS"
                description = "The OWASP Mobile Application Security Verification Standard (MASVS) is the industry standard for mobile app security. It can be used by mobile software architects and developers seeking to develop secure mobile applications, as well as security testers to ensure completeness and consistency of test results."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link: https://github.com/OWASP/owasp-masvs/"
                link = "https://github.com/OWASP/owasp-masvs/"
                icon = "https://raw.githubusercontent.com/OWASP/owasp-mastg/master/docs/assets/logo_circle.png"
            /> 
            <Module 
                header = "OWASP MASTG"
                description = "The OWASP Mobile Application Security Testing Guide (MASTG) is a comprehensive manual for mobile application security testing. A fundamental learning resource for both beginners and professionals covering a variety of topics from mobile OS internals to advanced reverse engineering techniques. It also provides an exhaustive set of test cases to be used for verifying the controls listed in the OWASP MASVS, including all relevant guidance and detailed information about the technical processes, techniques and tools."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link: https://github.com/OWASP/owasp-mastg/"
                link = "https://github.com/OWASP/owasp-mastg/"
                icon = "https://raw.githubusercontent.com/OWASP/owasp-mastg/master/docs/assets/logo_circle.png"
            /> 
            <Module 
                header = "Mobile Application Security Checklist"
                description = "The Mobile Application Security Checklist can be used to apply the MASVS controls during security assessments as it conveniently links to the corresponding MASTG test cases."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link: https://github.com/OWASP/owasp-mastg/releases/latest"
                link = "https://github.com/OWASP/owasp-mastg/releases/latest"
                icon = "https://raw.githubusercontent.com/OWASP/owasp-mastg/master/docs/assets/logo_circle.png"
            /> 
        </div>
                       
    </div>
  )
}

export default MobileSecurityModule;