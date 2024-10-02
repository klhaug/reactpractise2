import React from "react";
import "./App.css"
import { useState } from "react";

function MyInputBox ({count, handleClick, handleInputChange}) {
  return(
    <div>
      <input id="input" type="search" onChange={handleInputChange}/>
      <button onClick={handleClick}>{count} items have been added!</button>
    </div>
  )
}


function ToDoList ({items}) {
  return (
    <div className="todo-container">
      <ol>
        {items.map((element, index) => (<li key={index} >{element}</li>))}
      </ol>
    </div>
  )
}

export default function App () {
const [count, setCount] = useState(0);
const [item, setItem] = useState([]);
const [search, setSearch] =useState('');

function handleClick() {
  setCount(count + 1)
  setItem((item) => [...item, search])
}

function handleInputChange(event){
  setSearch(event.target.value)
}



  return (
    <div className="todo-container">
      <h1>More React Practise</h1>
      <MyInputBox count={count} handleClick={handleClick} handleInputChange={handleInputChange} />
      <ToDoList items ={item}/>
    </div>
  )
}