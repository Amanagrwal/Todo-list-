import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from 'styled-components';
import { FaEdit } from "react-icons/fa";

function Note(props) {
  const deletenote = () => {
    props.deleteIcon(props.id);
  };
  const editbtn = () => {
    props.editNote();
  };

  return (
    <NoteContainer>
      <div className="grid">
        <div className="note">
          <h1>Title: {props.title}</h1>
          <p>Content: {props.content}</p>
          <button className="button" onClick={deletenote}>
            <DeleteForeverIcon className='deleteicon' />
          </button>

          <button className="edit-btn-container" onClick={editbtn}>
            <FaEdit className='edit-btn' />
          </button>
        </div>
      </div>
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  display: inline-block;
  justify-content: space-between;

  .note {
    background-color: #fff;
    margin: 60px;
    border: 2px solid #ccc;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    width: 450px;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .deleteicon {
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 1.5rem;
    color: #ff1744;
  }
  .deleteicon:hover {
    color: red;
  }

  button {
    background-color: white;
  }
  button:hover {
    background-color: green;
  }
`;

export default Note;
