// Component input Bar 

import React from 'react';
import './InputContainer.css'

function InputBar(){
    return (
        <div className='inputBar'>
            <input placeholder='Place your text here' />
            <button> Shorten me</button>
        </div>
    )    
}

function InputContainer(){
    return(
        <InputBar/>
    )

}

export default InputContainer;