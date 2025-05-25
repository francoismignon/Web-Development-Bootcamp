import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(index) {
    setNotes(prevNotes =>{
       return prevNotes.filter((note, i)=> i !== index);
    });
  }

  function addOnNotes(note){
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        note
      ];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        addOnNotes={addOnNotes}
      />
      {notes.map((note, i)=>
        <Note
          key={i}
          id={i}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
        )}
      <Footer />
    </div>
  );
}

export default App;