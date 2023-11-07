import React from 'react'

import "./ReverseEngineeringModule.css";

import {Module } from "../components/Module";

export const ReverseEngineeringModule = () => {
  return (
    <div className = "modules__page">

        {/*header and description part*/}
        <h3 className = "header">Reverse engineering</h3>



        {/*modules list*/}
        <div className = "modules__list">
            <Module 
                header = "Ghidra"
                description = "Ghidra is a reverse engineering tool that was developed by the NSA and released in 2019. This has proved especially popular with malware analysts as it’s what’s known as a disassembly tool. This allows a malware analyst to inspect the functionality of a malware sample without running it, this is extremely useful as the analyst is able to look through the code of the malware and map out what it is doing. A disassembly tool such as Ghidra doesn’t run the code, it maps out the assembly code of the malware and allows the user to step forward and backward through the code without impacting the filesystem of the analysis device. This makes Ghidra an ideal tool for identifying and mapping out functions that may be of further interest to a malware analyst."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link: https://github.com/NationalSecurityAgency/ghidra/releases/tag/Ghidra_10.3.2_build"
                link = "https://github.com/NationalSecurityAgency/ghidra/releases/tag/Ghidra_10.3.2_build"
                icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ghidra_logo.svg/1200px-Ghidra_logo.svg.png"
            /> 
            <Module 
                header = "HxD"
                description = "HxD is a carefully designed and fast hex editor which, additionally to raw disk editing and modifying of main memory (RAM), handles files of any size. Editing works like in a text editor with a focus on a simple and task-oriented operation, as such functions were streamlined to hide differences that are purely technical. For example, drives and memory are presented similar to a file and are shown as a whole, in contrast to a sector/region-limited view that cuts off data which potentially belongs together. Drives and memory can be edited the same way as a regular file including support for undo. In addition, memory-sections define a foldable region and inaccessible sections are hidden by default."
                buttonText = "Continue on website"
                links = "The official website is available via the link: https://mh-nexus.de/en/hxd/"
                link = "https://mh-nexus.de/en/hxd/"
                icon = "https://images.sftcdn.net/images/t_app-icon-m/p/23a12dc6-9b28-11e6-8f10-00163ed833e7/2570855053/hxd-portable-logo.jpg"
            /> 
            <Module 
                header = "Volatility"
                description = "In 2007, the first version of The Volatility Framework was released publicly at Black Hat DC. The software was based on years of published academic research into advanced memory analysis and forensics. Up until that point, digital investigations had focused primarily on finding contraband within hard drive images. Volatility introduced people to the power of analyzing the runtime state of a system using the data found in volatile storage (RAM). It also provided a cross-platform, modular, and extensible platform to encourage further work into this exciting area of research. Another major goal of the project was to encourage the collaboration, innovation, and accessibility to knowledge that had been common within the offensive software communities."
                buttonText = "Continue on website"
                links = "The official website is available via the link: https://www.volatilityfoundation.org/"
                link = "https://www.volatilityfoundation.org/"
                icon = "https://avatars.githubusercontent.com/u/6001145?s=280&v=4"
            /> 
            <Module 
                header = "Cuckoo"
                description = "Cuckoo Sandbox is an open source software for automating analysis of suspicious files. To do so it makes use of custom components that monitor the behavior of the malicious processes while running in an isolated environment. You can throw any suspicious file at it and in a matter of minutes Cuckoo will provide a detailed report outlining the behavior of the file when executed inside a realistic but isolated environment."
                buttonText = "Continue on website"
                links = "The official documentation is available via the link: https://cuckoo.sh/docs/"
                link = "https://cuckoosandbox.org"
                icon = "https://dogukankurnaz.github.io/assets/img/posts/cuckoo.png"
            /> 
        </div>
                       
    </div>
  )
}

export default ReverseEngineeringModule;