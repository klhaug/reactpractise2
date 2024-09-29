import React from "react";
import { useState } from "react";
import "./App.css"
import { click } from "@testing-library/user-event/dist/click";


function Header() {
  return(
    <>
      <h1>ReactPractise</h1>
    </>
  );
}

function Button({search}) {
  const [count, setCount] = useState(0);
  

  function handleClick() {
    setCount(count + 1)
    console.log(search)
  }
  return (
    <>
      <button onClick={handleClick}>You have submitted {count} items!</button>
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

function SubmitItemBox({searchChange, search}) {
  return(
    <div className="submitItemBox">
      <InputFrame inputSearchChange = {searchChange}/>
      <Button search={search}/>
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
  const [search, setSearch] = useState("");

 
const onSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return(
    <>
      <Header />
      <SubmitItemBox searchChange = {onSearchChange} search={search}/>
      <ItemsSubmitted/>
    </>
  ) 
}