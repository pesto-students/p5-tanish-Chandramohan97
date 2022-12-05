// Component input Bar 

import React, { useState } from 'react';
import axios from "axios";
import './InputContainer.css'
// import './Components_styling/InputContainer.css'

function InputBar(){

    const [input,setInput] = useState("");
    const [url,setURL] = useState("");
    const [urlList,setList] = useState([]);
    const [loading,setLoading] = useState(false);

    let baseUrl = `https://api.shrtco.de/v2/shorten?url=${input}`

    const Input = (e) =>{
        setInput(e.target.value);
        // console.log(input);
    }

    const fetchURL = async(e) => {
        
        setLoading(true);
        try{
            
            // console.log(baseUrl)
            await axios(baseUrl).then((response) => {
                setURL(response.data);
                // console.log(response.data);
                setList(urlList.push(response.data));
                // console.log(response);
                console.log(urlList);
            })
            
        }catch(error){
            console.log(baseUrl);
            alert('Enter a valid URL')
            // console.log(error);
        }       
        setLoading(false);
    }
    return (
        <div className='inputBar'>

            <input 
            type="text"
            value={input}
            placeholder='Shorten the link here'
            onChange={Input}
             />

            <button onClick={fetchURL}>Shorten</button>
        </div>
    )    
}

function InputContainer(){
    return(
        <InputBar/>
    )

}


export default InputContainer;