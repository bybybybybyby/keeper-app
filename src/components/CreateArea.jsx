import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function handleTitle(event) {
    setTitle(event.target.value)
  }

  function handleNote(event) {
    setNoteText(event.target.value)
  }

  return (
    <div>
      <form>
        <input onChange={handleTitle} name="title" placeholder="Title" value={title} />
        <textarea onChange={handleNote} value={noteText} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={() => {
          props.handleClick(title, noteText);
          setTitle("");
          setNoteText("");
        }}>Add</button>
      </form>

    </div>
  );
}

export default CreateArea;
