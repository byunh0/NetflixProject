import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import netflex from '../img/netflex.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useNavigate}from 'react-router-dom';
import {Outlet} from "react-router-dom";
import "../App.css"


const AppLayout = () => {
  const [keyword,setKeyword]=useState("");
 const searchByKeyword=(event)=>{
  event.preventDefault()
  navigate(`/movie?q=${keyword}`)
  setKeyword("")
  //url을 바꿔서 넘겨주기

 }
  const navigate=useNavigate();
  const goHome=()=>{
    navigate('/')
  }
  const goLink=()=>{
    navigate('/movie')
  }
  const goimg=()=>{
    navigate('/')
  }
  return (
   <Container>
    <Navbar expand="lg"  variant="dark " >
      <Container fluid >
        <Navbar.Brand href="#">
         <img src={netflex} width={100} height={50} style={{marginLeft:'15px'}} onClick={goimg}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={goHome}>Home</Nav.Link>
            <Nav.Link  onClick={goLink}>Movie</Nav.Link>
           
          </Nav>
          <Form className="d-flex " onSubmit={searchByKeyword}>
            <Form.Control
            
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              value={keyword}
              onChange={(event)=>setKeyword(event.target.value)}
            />
            <Button variant="outline-danger" onClick={searchByKeyword}><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </Container>

  )
}

export default AppLayout