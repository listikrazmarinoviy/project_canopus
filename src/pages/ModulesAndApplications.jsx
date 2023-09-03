import React from 'react'

import "./ModulesAndApplications.css";

import {Module } from "./components/Module";

export const ModulesAndApplications = () => {
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
                links = "The GitHub repository is available via the link below: https://github.com/SELinuxProject/selinux"
                link = "https://github.com"
                icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            /> 
            <Module 
                header = "SELinux"
                description = "SELinux is a security enhancement to Linux which allows users and administrators more control over access control. Access can be constrained on such variables as which users and applications can access which resources. These resources may take the form of files. Standard Linux access controls, such as file modes (-rwxr-xr-x) are modifiable by the user and the applications which the user runs. Conversely, SELinux access controls are determined by a policy loaded on the system which may not be changed by careless users or misbehaving applications."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link below: https://github.com/SELinuxProject/selinux"
                link = "https://github.com"
                icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            /> 
            <Module 
                header = "SELinux"
                description = "SELinux is a security enhancement to Linux which allows users and administrators more control over access control. Access can be constrained on such variables as which users and applications can access which resources. These resources may take the form of files. Standard Linux access controls, such as file modes (-rwxr-xr-x) are modifiable by the user and the applications which the user runs. Conversely, SELinux access controls are determined by a policy loaded on the system which may not be changed by careless users or misbehaving applications."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link below: https://github.com/SELinuxProject/selinux"
                link = "https://github.com"
                icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            /> 
            <Module 
                header = "SELinux"
                description = "SELinux is a security enhancement to Linux which allows users and administrators more control over access control. Access can be constrained on such variables as which users and applications can access which resources. These resources may take the form of files. Standard Linux access controls, such as file modes (-rwxr-xr-x) are modifiable by the user and the applications which the user runs. Conversely, SELinux access controls are determined by a policy loaded on the system which may not be changed by careless users or misbehaving applications."
                buttonText = "Continue on GitHub"
                links = "The GitHub repository is available via the link below: https://github.com/SELinuxProject/selinux"
                link = "https://github.com"
                icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            /> 
        </div>
                       
    </div>
  )
}

export default ModulesAndApplications;