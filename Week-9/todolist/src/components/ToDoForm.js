import React,{useState} from 'react'
import './toDoForm.css'

function ToDoForm(){
  const [list,setList] = useState({});
  const [items, setItems] = useState([]);
  
  function addItem(){
    
    if(!list){
      alert('Enter an item')   // Incase the user tries to add empty value in the input.
      return ;
    }
    const item= {
      id : Math.floor(Math.random() * 1000),
      value : list
    };

    setItems( items => [...items,item]); // Adding list to the items array.
    // console.log(items); For testing.

  
    setList("");  // resetting the value of list 
  }

  function deleteItem(id){
    const newArray = items.filter( item => item.id !== id);
    setItems(newArray);

  }
  return (
    // replacing form with <div> container as the console.log would disappear immediately post submit.
     <div id= "form">                
        <input 
        type ="text"
        size = '50' 
        onChange ={e => setList(e.target.value)
        }
        /> 
        <button onClick={addItem}> Add </button>
    <ul>
      {items.map(items => { 
        return(
        <li key ={items.id}> {items.value} <button className ='delete-button' onClick ={() => deleteItem(items.id)} > 🗙 </button></li> 
      )})}
    </ul>

    </div>
  )
}

export default ToDoForm;