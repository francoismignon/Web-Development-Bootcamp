import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount(){
    setCount(count -1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
