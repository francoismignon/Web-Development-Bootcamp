import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(e) {
    const {value, name} = e.target;
    setContact((prevValue) => {
      if (name === "fName") {
        return {
          ...prevValue,
          fName: value
        };
      } else if (name === "lName") {
        return {
          fName:prevValue.fName,
          lName: value,
          email:prevValue.email
          
        };
      } else {
        return {
          ...prevValue,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input value={contact.fName} onChange={updateContact} name="fName" placeholder="First Name" />
        <input value={contact.lName} onChange={updateContact} name="lName" placeholder="Last Name" />
        <input value={contact.email} onChange={updateContact} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
