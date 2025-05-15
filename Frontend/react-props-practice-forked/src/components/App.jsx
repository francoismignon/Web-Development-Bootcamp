import React from "react";
import Card from "./Card"
import contacts from "../contacts";

function App() {
  return (
    <div>
      {contacts.map((props, index) =>
        (<Card key={index}{...props} />)
      )}
    </div>
  );
}
export default App;
