import React, { useState } from "react";

function App() {

  const [itemInput, setItemInput] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(e){
    setItemInput(e.target.value);
  }

  function handleClick(){
    setListItems(prevListItems => {
      return [...prevListItems, itemInput];
    });
    setItemInput("");
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={itemInput} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
