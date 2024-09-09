import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

function NoteForm(props) {
  const [note, setnote] = useState({
    title: '',
    content: '',
});
  // Populate form if editing a note
  useEffect(() => {
    if(props.currentEdit){
      setnote({
        title: props.currentEdit.title,
        content: props.currentEdit.content,
      });
    } 
    else {
      setnote({
        title: '',
        content: '',
      });
    }
  }, [props.currentEdit]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setnote((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };

  const addOrUpdateEvent = () => {
    if (props.currentEdit) {
      props.updateNote(note);
    } else {
      props.passNote(note);
    }
    setnote({
      title: '',
      content: '',
    });
  };

  return (
    <MainNote>
      <div className="form">
        <input
          type="text"
          placeholder='Title..'
          name='title'
          autoComplete='off'
          onChange={inputEvent}
          value={note.title}
        />

        <textarea
          rows="4"
          cols="50"
          name="content"
          value={note.content}
          onChange={inputEvent}
          placeholder='Write a note...'>
        </textarea>
        <button className='btn' onClick={addOrUpdateEvent}>
          <AddIcon />
        </button>
      </div>
    </MainNote>
  );
}

const MainNote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;


  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(180,100,120);
    padding: 50px;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 450px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    background-color: #6200ea;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  .btn:hover {
    background-color: #3700b3;
  }

  .btn svg {
    margin-right: 5px;
  }
`;

export default NoteForm;
