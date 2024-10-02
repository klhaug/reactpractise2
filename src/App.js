import React from "react";
import "./App.css"
import { useState } from "react";

export default function App () {
const [count, setCount] = useState(0);
const [item, setItem] = useState([]);
const [search, setSearch] =useState('');

function MyInputBox () {
  return(
    <div>
      <input type="text"/>
      <input type="button"/>
    </div>
  )
}

  return (
    <div className="todo-container">
      <h1>More React Practise</h1>
      <MyInputBox />
    </div>
  )
}