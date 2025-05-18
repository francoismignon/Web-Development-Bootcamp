import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseLeave(){
    setMouseOver(false);
  }

  function handleClick() {
    console.log("clicked !");
    setHeadingText("Soumission !");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMouseOver && "black"}} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
