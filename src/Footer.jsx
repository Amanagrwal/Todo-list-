import React, { useState } from 'react'

function Footer() {
 const year = new Date().getFullYear();
  return (
    <>
      <footer className='footer'>
        <p>cplyright © {year}</p>
      </footer>
    </>
  )
}

export default Footer
