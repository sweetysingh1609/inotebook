import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
export const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <>
      <div>
        this is about {a.state.name} and grade {a.state.class}
      </div>
    </>
  );
};
