import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  
  return (
    <NoteContext.Provider vlaue={}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
