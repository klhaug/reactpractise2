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
      <button onClick={handleClick}>You have submitted {count} items!</button>
    </>
  );
}

function InputFrame() {
  return(
    <div>
      <input className="inputFrame"></input>
    </div>
  );
}

function SubmitItemBox() {
  return(
    <div className="submitItemBox">
      <InputFrame />
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
  return(
    <>
      <Header />
      <SubmitItemBox/>
      <ItemsSubmitted/>
    </>
  )
}