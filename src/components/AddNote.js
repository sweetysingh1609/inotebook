import { React, useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Note Successfully", "success");
  };
  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="conatiner my-3">
        <h2>Add new note here</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
            value={note.title}
              onChange={onChange}
              minLength={5}
              required
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
            value={note.description}
              onChange={onChange}
              minLength={5}
              required
              type="text"
              className="form-control"
              id="description"
              name="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
            value={note.tag}
              onChange={onChange}
              minLength={5}
              required
              type="text"
              className="form-control"
              id="tag"
              name="tag"
            />
          </div>

          <button
            disabled={
              note.title.length < 5 ||
              note.description.length < 5 
            }
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
