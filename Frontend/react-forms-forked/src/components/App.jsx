import React, { useState } from "react";

function App() {

  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  function handleClick(e) {
    setText(value);
    e.preventDefault();
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="container">
      <h1>Bonjour {text}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
