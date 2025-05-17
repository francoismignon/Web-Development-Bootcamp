import React from "react";

// function App() {

//   let curentTime = new Date().toLocaleTimeString();
//   const [time, setTime] = React.useState(curentTime);

//   function getTime() {
//     setTime(()=> new Date().toLocaleTimeString());
//     console.log(time);
//   }

//   return (
//     <div className="container">
//       <h1>{time}</h1>
//       <button onClick={getTime}>Get Time</button>
//     </div>
//   );
// }

function App() {

  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(getTime,1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
