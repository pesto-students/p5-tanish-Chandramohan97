// Component input Bar 

import React from 'react';
import './Components_styling/InputContainer.css'

function InputBar(){
    return (
        <div className='inputBar'>
            <input placeholder='Shorten the link here' />
            <button> Shorten it</button>
        </div>
    )    
}

function InputContainer(){
    return(
        <InputBar/>
    )

}

export default InputContainer;