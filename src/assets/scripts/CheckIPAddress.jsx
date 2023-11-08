import axios from "axios";
import React from "react";


function CheckIPAddress(ipAddress) {
    return (
        axios.get('http://flatron9996.pythonanywhere.com/ip_analyze', {params: {ip_address: ipAddress}})
        .then((response) => {console.log(response.data);})
    )
}

export default CheckIPAddress();