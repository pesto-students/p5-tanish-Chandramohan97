import React, {useEffect, useState} from 'react';
import './LinkResult.css';

const LinkResult = ({input,url}) => {

    const [copy,setCopy] = useState(false);

    if(!url) return null;
    const shrtLink = url.result.short_link;
    const ogLink  = url.result.original_link;

    function Copying(){
        navigator.clipboard.writeText(shrtLink);
        navigator.clipboard.readText().then((clipText) => {
            if(clipText === shrtLink)
                setCopy(true)});
    } 
    
  return (
    <div className='Link'>
        <h4>{shrtLink}</h4>
        <button onClick={()=> Copying()} >{copy ? "Copied" : "Copy"}</button>
    </div>
    
  )
}

export default LinkResult