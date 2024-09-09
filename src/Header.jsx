import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import  Styled from "styled-components"
function Header() {
  return (
    <>
    <Style>
   <nav>
    <div className='navbar-container'>
      <img src="Paper-notes.png" alt="image"className='navbar-image'/>
      <h1>Keep</h1>
    </div>
   </nav>
</Style>
    </>
  )
}

const Style = Styled.section` 
.navbar-container{
  display: flex;
  align-items:center;
  background-color:  #f8eded;
  height: 5rem;
  justify-content: center;
  gap:1rem;
}
.navbar-image{
  height:  75%;
  background:  #f8eded;
  color:black; 
  margin-left: 1.5rem;
  margin-top: .50rem;
  cursor: pointer;
  margin-right: 2rem;
 
}

`;
export default Header
