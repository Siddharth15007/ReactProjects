import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      user: "6144495fb9e632ed7e899298",
      title: "Note 1",
      description: " note desc 1",
      tag: "General",
      _id: "61444de6b9e632ed7e8992a1",
      date: "2021-09-17T08:12:22.710Z",
      __v: 0,
    },
    {
      user: "6144495fb9e632ed7e899298",
      title: "Note 1",
      description: " note desc 1",
      tag: "General",
      _id: "61444de6b9e632ed7e8992a1",
      date: "2021-09-17T08:12:22.710Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
