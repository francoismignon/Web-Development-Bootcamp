import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function updateNote(e) {
    const { value, name } = e.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  return (
    <div>
      <form>
        <input value={note.title} onChange={updateNote} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={updateNote} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={()=> {
          props.addOnNotes(note);
          setNote({
            title:"",
            content:""
          });
          }} type="button">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
