import {React, useContext} from 'react'
import noteContext from "../context/notes/NoteContext";
import AddNote from './AddNote';
import NoteItem from './NoteItem';
export const Notes = () => {
     const context = useContext(noteContext);
     const { notes } = context;
  return (
    <>
     <AddNote/>
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          //In mogo we have to mention _id instead of id
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
}
