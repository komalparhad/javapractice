import React, { useContext } from "react";
import Noteitem from "./Noteitem";
import noteContext  from "../context/notes/noteContext";
import AddNote from "./AddNote";


const Notes = () => {
    const context = useContext(noteContext);
const {notes} = context;
  return (
    <>
  <AddNote/>
    <div className="row my-3">
                <h2>You Notes</h2>
                <div className="container mx-2"> 
                {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })}
            </div>
    </>
  );
};

export default Notes;
