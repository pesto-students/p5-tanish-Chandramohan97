import React,{useState} from 'react'
import './toDoForm.css'

function ToDoForm(){
  const [list,setList] = useState({});
  const [items, setItems] = useState([]);
  
  function addItem(){
    
    if( !list){
      alert('Enter the value')
      return ;
    }
    const item= {
      id : Math.floor(Math.random() * 1000),
      value : list
    };

    setItems( items => [...items,item]);
    console.log(items);

    setList("");
  }
  return (
    // replacing form with <div> container as the console.log would disappear immediately post submit.
     <div className= "form">                
        <input 
        type ="text"
        size = '50' 
        onChange ={e => setList(e.target.value)}
        /> 
        <button onClick={addItem}> Add </button>
      </div>
  )
}

export default ToDoForm;