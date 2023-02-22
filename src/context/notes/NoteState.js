import react, { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get ALL Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjFjNGFlMDdhMjJiMmIwODY4OGEzIn0sImlhdCI6MTY3NTE0NTc4NX0.jfskR2mIXi-eobe81AnfbzxQO7pd-tlE44XxBG1p8Ow",
      }
    });
    const json = await response.json()
    
    setNotes(json)
  };
  //Add a note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjFjNGFlMDdhMjJiMmIwODY4OGEzIn0sImlhdCI6MTY3NTE0NTc4NX0.jfskR2mIXi-eobe81AnfbzxQO7pd-tlE44XxBG1p8Ow",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
   
    
  };

  //edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjFjNGFlMDdhMjJiMmIwODY4OGEzIn0sImlhdCI6MTY3NTE0NTc4NX0.jfskR2mIXi-eobe81AnfbzxQO7pd-tlE44XxBG1p8Ow",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
   

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit on the client side
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;

      }
     
    }
    setNotes(newNotes);
  };

  //delete a note
  const  deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjFjNGFlMDdhMjJiMmIwODY4OGEzIn0sImlhdCI6MTY3NTE0NTc4NX0.jfskR2mIXi-eobe81AnfbzxQO7pd-tlE44XxBG1p8Ow",
      }
    });
    const json = response.json();
   
    // console.log("Deleting note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
