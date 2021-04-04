import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([{ title: "Groceries", content: "Buy apples and bananers" }]);

    function addNote(title, note) {
        setNotes(prevNotes => {
            return (
                [...prevNotes, { title: title, content: note }]
            )
        })
        event.preventDefault();  // Prevent page refresh
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return (index !== id)
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea handleClick={addNote} />
            {notes.map((note, idx) => {
                return <Note
                    key={idx}
                    id={idx}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote} />
            })}
            <Footer />
        </div>
    );
}

export default App;
