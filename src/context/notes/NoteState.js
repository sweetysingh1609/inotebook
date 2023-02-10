import react, { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "563d9f22affb6d27394ac08b0d",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kukuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:03:43.030Z",
      __v: 0,
    },
    {
      _id: "363d9f2affb62d27394ac08b0d",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kukuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:03:43.030Z",
      __v: 0,
    },
    {
      _id: "263d9f2aff2b6d27394ac08b0d",
      user: "63d61c4a2e07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kukuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:03:43.030Z",
      __v: 0,
    },
    {
      _id: "163d9f2affb62d27394ac08b0d",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kukuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:03:43.030Z",
      __v: 0,
    },
    {
      _id: "763d9f32bfb6d27394ac08b211",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kuffkuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:05:47.331Z",
      __v: 0,
    },
    {
      _id: "963d9f33efb6d27394ac08b21b",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnffflj hnikn  ",
      description: " kuffkuggih kfh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:06:06.112Z",
      __v: 0,
    },
    {
      _id: "063db34e3ca0fdcc62323ef92e",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yjbujujbk hjbnffflj hnikn  ",
      description: " kuffkuggihlk kfh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-02T03:58:27.945Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial
    );
 
 

  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
