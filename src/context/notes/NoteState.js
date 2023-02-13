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
    console.log(json)
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

    console.log("Adding a new note");
    const note = {
      _id: "063db34e3ca90fdcc62323ef92e",
      user: "63d61c4ae07a22b2b08688a3",
      title: title,
      description: description,
      tag: tag,
      date: "2023-02-02T03:58:27.945Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjFjNGFlMDdhMjJiMmIwODY4OGEzIn0sImlhdCI6MTY3NTE0NTc4NX0.jfskR2mIXi-eobe81AnfbzxQO7pd-tlE44XxBG1p8Ow",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to edit on the client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //delete a note
  const deleteNote = (id) => {
    console.log("Deleting note with id" + id);
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
