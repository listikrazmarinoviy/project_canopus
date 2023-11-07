import React from 'react';
import {useState} from 'react';
import axios from 'axios';


function ImageUpload() {

    const [image, setImage] = useState('')

    function handleImage(e) {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    function handleApi() {
        const url = "https://test_react_project.requestcatcher.com/test";
        const formData = new FormData()
        formData.append('image', image)

        axios.post(url, formData).then((res) => {
            console.log(res)
        })
    }

    return(
        <div>
            <input type = "file" name = "file" onChange = {handleImage}/>
            <button onClick = {handleApi}>Submit</button>
        </div>

    )
}

export default ImageUpload;