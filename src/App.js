import React from "react";
import { useState } from "react";
import "./App.css"


function Header() {
  return(
    <>
      <h1>ReactPractise</h1>
    </>
  );
}

function Button() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={handleClick, console.log(search)}>You have submitted {count} items!</button>
    </>
  );
}

function InputFrame({inputSearchChange}) {
  return(
    <div>
      <input 
      className="inputFrame"
      type="search"
      onChange={inputSearchChange}
      >  
      </input>
    </div>
  );
}

function SubmitItemBox({searchChange}) {
  return(
    <div className="submitItemBox">
      <InputFrame inputSearchChange = {searchChange}/>
      <Button/>
    </div>
  )
}

function ItemsSubmitted() {
  return(
    <div className="itemsSubmitted">

    </div>
  )
}



export default function App() {
  const [search, setSearch] = useState()

 
const onSearchChange = (event) => {
    setSearch({search :event.target.value})
    // {search : event.target.value}
  }

  return(
    <>
      <Header />
      <SubmitItemBox searchChange = {onSearchChange}/>
      <ItemsSubmitted/>
    </>
  ) 
}