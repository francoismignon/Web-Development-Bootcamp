import React from "react";
import Login from "./Login";

var isLoggedIn = true;
// const date = new Date(2000, 2, 1, 18).getHours();
// console.log(date);

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn?<h1>Hello</h1>:<Login nameBtn = "Connexion"/>} */}
      {isLoggedIn && <h1>Hello</h1>}
      {!isLoggedIn && <Login nameBtn = "Connexion"/>}
      {/* {date > 12 && <h1>Pourquoi est-ce que tu travailles encore ?</h1>} */}
    </div>
  );
}

export default App;
