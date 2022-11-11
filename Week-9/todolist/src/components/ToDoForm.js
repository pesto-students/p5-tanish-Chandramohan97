import React,{useState} from 'react'
import './toDoForm.css'

function ToDoForm(){
  const [list,setList] = useState({});
  const [items, setItems] = useState([]);
  
  const [showEdit, setShowEdit] = useState(-1); 
  const [updatedText, setUpdatedText] = useState("");

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

  // Editing a text item after creating it
  function editItem(id,newText){
    let currentItem = items.filter((items) => items.id === id);

    const newItem = {
      id: currentItem.id,
      value : newText
    };

    deleteItem(id);

    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }

  return (
    // replacing form with <div> container as the console.log would disappear immediately post submit.
     <div id= "form">                
        <input 
        placeholder= "Enter a to do task"
        type ="text"
        size = '50' 
        onChange ={e => setList(e.target.value)
        }
        /> 
        <button onClick={addItem}> Add </button>
    <ul>
      {items.map( (items) => { 
        return(
        <div>
        <li key ={items.id} onClick={ () => setShowEdit(items.id)}> {items.value} <button className ='delete-button' onClick ={() =>  deleteItem(items.id)} > 🗙 </button></li> 

        {showEdit === items.id ? (
          <div>
            <input type="text" value ={updatedText} onChange = {(e) => setUpdatedText(e.target.value)}/>
            <button onClick={() => editItem(items.id,updatedText)}> Update</button>   
          </div>
        ):null }
        </div>
          )
        }
      )
    }  
    </ul>
    </div>
  )
}

  export default ToDoForm;