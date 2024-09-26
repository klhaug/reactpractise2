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
      <button onClick={handleClick}>This is a Reactbutton with {count} clicks!</button>
    </>
  );
}

export default function App() {
  return(
    <>
      <Header />
      <Button />
    </>
  )
}