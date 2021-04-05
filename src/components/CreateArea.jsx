import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expandedNote, setExpandedNote] = useState({
    isHidden: "hidden",
    numRows: 1,
    zoom: false
  })

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
    setExpandedNote({
      isHidden: "hidden",
      numRows: 1,
      zoom: false
    })
    event.preventDefault();  // Prevent page refresh
  }

  function expandNote() {
    setExpandedNote({
      isHidden: "",
      numRows: 3,
      zoom: true
    })
  }

  return (
    <div>
      <form className="create-note">
        <input 
          type={expandedNote.isHidden}
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
          rows={expandedNote.numRows} />
        <Zoom in={expandedNote.zoom}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
