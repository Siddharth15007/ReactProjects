import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes } = noteContext;

  return (
    <div className="row my-3">
      <h2>You Notes</h2>
      <div className="container mx-2">
        {notes.length === 0 && "No notes to display"}
      </div>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
};
export default Notes;
