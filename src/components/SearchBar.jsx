import "./SearchBar.css";

import {FaSearch} from "react-icons/fa";
import React, {useState} from "react";

export const SearchBar = () => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        //test api request
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            });
    };

    //every time when user add or remove a letter
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    };

    return (
        <div className = "input-wrapper">
            <FaSearch id = "search-icon" />
            <input 
                placeholder = "Type to search..." 
                value = {input}
                onChange = {(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;