import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    // Do not add if title and note are blank
    if (!(note.title === "" && note.content === "")) {
      props.onAdd(note);
      setNote({title:"", content:""});
    }
    setExpanded(false);
    event.preventDefault();  // Prevent page refresh
  }

  function expandNote() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input 
          type={isExpanded ? "" : "hidden"}
          onChange={handleChange} 
          name="title" 
          value={note.title} 
          placeholder="Title" />
        <textarea 
          onChange={handleChange} 
          onClick={expandNote}
          name="content" 
          value={note.content} 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
