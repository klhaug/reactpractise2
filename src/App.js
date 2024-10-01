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

function Button({search, onButtonSubmit}) {
  const [count, setCount] = useState(0);
  

  function handleClick() {
    if (search.length > 0) {
      setCount(count + 1)
      console.log(search)
      onButtonSubmit();
    } else {
      alert("Please enter information")
    }

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

function SubmitItemBox({searchChange, search, onButtonSubmit}) {
  return(
    <div className="submitItemBox">
      <InputFrame inputSearchChange = {searchChange}/>
      <Button onButtonSubmit={onButtonSubmit} search={search}/>
    </div>
  )
}

function ItemsSubmitted({items}) {


  return(
    <ol className="itemsSubmitted">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  )
}



export default function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  
function onButtonSubmit() {
  setItems((items) => [...items, search])
}
  
const onSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return(
    <>
      <Header />
      <SubmitItemBox onButtonSubmit={onButtonSubmit} searchChange = {onSearchChange} search={search}/>
      <ItemsSubmitted items = {items}/>
    </>
  ) 
}


// Det er onclick som skal utløse at den legger til et nytt item. Derfor må funksjonen passes ned til button. 
// Staten kan være overordnet i appen sikkert. 
// 




//HVA HAR JEG LÆRT?
