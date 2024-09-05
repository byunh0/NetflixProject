import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Spoiler.style.css'
const Spoiler = ({setSpoiler}) => {
  const closeButton=()=>{
    setSpoiler(false)
  }
  return (
    <div
      className="modal show spoiler-show "
      style={{ display: 'block', position: 'initial'  }}
    >
      
      <div className="spoilerstyle_vh">
        
          <Button variant="secondary" className="spoiler-button" onClick={closeButton}>Close</Button>
       
      </div>
     
    </div>
  )
}

export default Spoiler

