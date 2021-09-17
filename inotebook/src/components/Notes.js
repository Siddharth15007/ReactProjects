import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <div className="container my-3">
      <h1>Your Note</h1>
      {notes.map((note) => {
        return note.title;
      })}
    </div>
  );
};

export default Notes;
