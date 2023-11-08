import React from 'react'

import "./PacketCaptureAndAnalysis.css";

import {Module } from "../components/Module";

export const PacketCaptureAndAnalysis = () => {
  return (
    <div className = "modules__page">

        {/*header and description part*/}
        <h3 className = "header">Packet capture and analysis</h3>



        {/*modules list*/}
        <div className = "modules__list">
            <Module 
                header = "Wireshark"
                description = "Wireshark is a network packet analyzer. A network packet analyzer presents captured packet data in as much detail as possible. You could think of a network packet analyzer as a measuring device for examining what’s happening inside a network cable, just like an electrician uses a voltmeter for examining what’s happening inside an electric cable (but at a higher level, of course)."
                buttonText = "Continue on website"
                links = "The documentation is available via the link: https://www.wireshark.org/docs/wsug_html_chunked/"
                link = "https://www.wireshark.org/"
                icon = "https://www.vaniercollege.qc.ca/ppd/files/2023/03/sflogo-front.png"
            /> 
            <Module 
                header = "TCPdump"
                description = "Tcpdump is a command line utility that allows you to capture and analyze network traffic going through your system. It is often used to help troubleshoot network issues, as well as a security tool. A powerful and versatile tool that includes many options and filters, tcpdump can be used in a variety of cases. Since it's a command line tool, it is ideal to run in remote servers or devices for which a GUI is not available, to collect data that can be analyzed later. It can also be launched in the background or as a scheduled job using tools like cron."
                buttonText = "Continue on website"
                links = "The documentation is available via the link: https://www.tcpdump.org/index.html#documentation"
                link = "https://www.tcpdump.org/index.html"
                icon = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/a4/54f3b90a5d4aa29c1d838fa815dbf6/LFCA.png?auto=format%2Ccompress&dpr=1"
            /> 
            <Module 
                header = "pfSense"
                description = "The pfSense project is a free network firewall distribution, based on the FreeBSD operating system with a custom kernel and including third party free software packages for additional functionality. pfSense software, with the help of the package system, is able to provide the same functionality or more of common commercial firewalls, without any of the artificial limitations. It has successfully replaced every big name commercial firewall you can imagine in numerous installations around the world, including Check Point, Cisco PIX, Cisco ASA, Juniper, Sonicwall, Netgear, Watchguard, Astaro, and more."
                buttonText = "Continue on website"
                links = "The official website is available via the link: https://www.pfsense.org/getting-started/"
                link = "https://www.pfsense.org/getting-started/"
                icon = "https://conocimientolibre.mx/wp-content/uploads/2021/03/Logo-pfsense.jpg"
            /> 
            <Module 
                header = "NMap"
                description = "Nmap (“Network Mapper”) is an open source tool for network exploration and security auditing. It was designed to rapidly scan large networks, although it works fine against single hosts. Nmap uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems (and OS versions) they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics. While Nmap is commonly used for security audits, many systems and network administrators find it useful for routine tasks such as network inventory, managing service upgrade schedules, and monitoring host or service uptime."
                buttonText = "Continue on website"
                links = "The official documentation is available via the link: https://nmap.org/book/man.html"
                link = "https://nmap.org"
                icon = "https://play-lh.googleusercontent.com/xfEwmzQADrjODuFw94jDJpcUM2f15a9wKvzOExZ8hH7zvYaNpXUzH-fcbAp3RTrPs18"
            /> 
        </div>
                       
    </div>
  )
}

export default PacketCaptureAndAnalysis;