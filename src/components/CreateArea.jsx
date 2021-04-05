import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

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
    event.preventDefault();  // Prevent page refresh
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
