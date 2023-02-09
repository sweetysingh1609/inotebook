import react, { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63d9f2affb6d27394ac08b0d",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kukuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:03:43.030Z",
      __v: 0,
    },
    {
      _id: "63d9f2affb6d27394ac08b0d",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kukuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:03:43.030Z",
      __v: 0,
    },
    {
      _id: "63d9f2affb6d27394ac08b0d",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kukuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:03:43.030Z",
      __v: 0,
    },
    {
      _id: "63d9f2affb6d27394ac08b0d",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kukuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:03:43.030Z",
      __v: 0,
    },
    {
      _id: "63d9f32bfb6d27394ac08b11",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnlj hnikn  ",
      description: " kuffkuggih kh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:05:47.331Z",
      __v: 0,
    },
    {
      _id: "63d9f33efb6d27394ac08b1b",
      user: "63d61c4ae07a22b2b08688a3",
      title: "sety yujbk hjbnffflj hnikn  ",
      description: " kuffkuggih kfh  khbhj ",
      tag: "Checkujgk",
      date: "2023-02-01T05:06:06.112Z",
      __v: 0,
    },
    {
      _id: "63db34e3ca0fdcc62323ef9e",
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
