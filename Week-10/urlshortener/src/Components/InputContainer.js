// Component input Bar 

import React, { useState } from 'react';
import axios from "axios";
import './InputContainer.css'
// import './Components_styling/InputContainer.css'

function InputBar(){

    const [input,setInput] = useState("");
    const [url,setUrl] = useState("");
    const [urlList,seturlList] = useState([]);
    const [loading,setLoading] = useState(false);

    const baseUrl = `https://api.shrtco.de/v2/shorten?url=${input}`

    const Input = (e) =>{
        setInput(e.target.value);
        // console.log(input);
    }

    const Click = async(e) => {
        
        setLoading(true);
        try{
            const res = await axios.get(baseUrl).then((response) =>
             {
                // console.log(respnse);
                setUrl(response.data);
                // console.log(resonse.data)
                seturlList([...urlList,response.data]);
                // console.log(urlList);
            })
      
        }catch(error){
            alert('invalid url')
            // console.log('hello');
        }
            setLoading(true);
        }       
        
    
    return (
        <div className='inputBar'>

            <input 
            type="text"
            value={input}
            placeholder='Shorten the link here'
            onChange={Input}
             />

            <button onClick={Click}>Shorten</button>
        </div>
    )    
}

function InputContainer(){
    return(
        <InputBar/>
    )

}


export default InputContainer;