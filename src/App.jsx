import React, { useEffect, useState } from 'react';
import Header from './Header';
import NoteForm from './CreatNote';
import Note from './Note';
import Footer from './Footer';


 const todokey = "todolist";

const App = () => {
  const [additem, setadditem] = useState(()=>{
    const list = localStorage.getItem(todokey);
  if(!list) return [];
    return JSON.parse(list);
  });

  // const [additem, setadditem] = useState(()=>{
  //   const rawTodo = localStorage.getItem(todokey);
  //  return rawTodo ? JSON.parse(rawTodo) : [];
  // });
  
  const [currentEdit, setCurrentEdit] = useState(null); 

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
    // add data to localstorage 

    localStorage.setItem(todokey ,JSON.stringify(additem) )




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
