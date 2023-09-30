import React from 'react'

import "./LinuxHardeningModule.css";

import {Module } from "../components/Module";

export const LinuxHardeningModule = () => {
  return (
    <div className = "modules__page">

        {/*header and description part*/}
        <h3 className = "header">Linux hardening</h3>

        <p className = "module__and_application_description">
            On this page we collected resources, modules and applications 
            that could make your Linux device more secure.
        </p>
        <p className = "module__and_application_description">
            Project Canopus is not responsible for these modules and applications; 
            use them only after you've carefully read the documentation to each module and application!
        </p>



        {/*modules list*/}
        <div className = "modules__list">
            <Module 
                header = "SELinux"
                description = "SELinux is a security enhancement to Linux which allows users and administrators more control over access control. Access can be constrained on such variables as which users and applications can access which resources. These resources may take the form of files. Standard Linux access controls, such as file modes (-rwxr-xr-x) are modifiable by the user and the applications which the user runs. Conversely, SELinux access controls are determined by a policy loaded on the system which may not be changed by careless users or misbehaving applications."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link: https://github.com/SELinuxProject/selinux"
                link = "https://github.com/SELinuxProject/selinux"
                icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/SELinux_logo.svg/1200px-SELinux_logo.svg.png"
            /> 
            <Module 
                header = "AppArmor"
                description = "AppArmor is an effective and easy-to-use Linux application security system. AppArmor proactively protects the operating system and applications from external or internal threats, even zero-day attacks, by enforcing good behavior and preventing both known and unknown application flaws from being exploited. Many Linux distribution (e.g. Debian, Ubuntu, OpenSUSE) ship with AppArmor. Simply run aa-status to see if your Linux distribution already has AppArmor integrated. Each time AppArmor denies applications from doing potentially harmful operations the event is logged. Depending on your system the AppArmor events can be seen in the syslog, auditd, kernel log or in journal logs."
                buttonText = "Continue on website"
                links = "The documentation is available via the link: https://gitlab.com/apparmor/apparmor/-/wikis/Documentation"
                link = "https://apparmor.net/"
                icon = "https://apparmor.net/img/avatar-icon.png"
            /> 
            <Module 
                header = "OpenSCAP"
                description = "The OpenSCAP project provides tools that are free to use anywhere you like, for any purpose. Availability of the code results in greater portability – anyone can send patches to add support for their platform of choice. The source code of all OpenSCAP tools is public. Feel free to learn from it, share it, or review it."
                buttonText = "Continue on website"
                links = "The documentation is available via the link: https://www.open-scap.org/resources/documentation/"
                link = "https://www.open-scap.org/getting-started/"
                icon = "https://pbs.twimg.com/profile_images/483957945797865472/qf3oFVJ-_400x400.png"
            /> 
            <Module 
                header = "Linux Privilege Checker"
                description = "This script is intended to be executed locally on a Linux box to enumerate basic system info and search for common privilege escalation vectors such as world writable files, misconfigurations, clear-text passwords and applicable exploits. Linuxprivchecker is designed to identify potential areas to investigate further, not provide direct action or exploitation. This is to help users further learn how these privilege escalations work and keep it in line with the rules, for self-directed exploitation, laid out for the OSCP, HTB, and other CTFs/exams."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link: https://github.com/sleventyeleven/linuxprivchecker"
                link = "https://github.com/sleventyeleven/linuxprivchecker"
                icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            /> 
        </div>
                       
    </div>
  )
}

export default LinuxHardeningModule;