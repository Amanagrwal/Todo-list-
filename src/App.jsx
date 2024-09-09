import React, { useState } from 'react';
import Header from './Header';
import NoteForm from './CreatNote';
import Note from './Note';
import Footer from './Footer';

const App = () => {
  const [additem, setadditem] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(null); // New state to track the current note being edited

  const addnote = (note) => {
      setadditem((predata) => {
        return [...predata, note];
      });
    }
  const ondelete = (id) => {
    setadditem((preval) =>
      preval.filter((curdata, index)=>{
        return index !== id 
      })
     );
  };
  const editNote = (note, index) => {
    setCurrentEdit({ ...note, index });
  };

  const updateNote = (updatedNote) => {
    setadditem((prevNotes) => {
      const notes = [...prevNotes];
      notes[currentEdit.index] = updatedNote;
      return notes;
    });
    setCurrentEdit(null);
  };

  return (
    <>
      <Header />

      <NoteForm passNote={addnote} currentEdit={currentEdit} updateNote={updateNote} />

      {additem.map((val, index) => (
        <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteIcon={ondelete}
          editNote={() => editNote(val, index)} 
        />
      ))}
      <Footer />
    </>
  );
};
export default App;
