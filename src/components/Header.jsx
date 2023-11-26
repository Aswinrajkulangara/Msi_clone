import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img style={{width:'100px'}} src="https://storage-asset.msi.com/frontend/imgs/logo.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='he' href="#features"><strong>Products</strong></Nav.Link>
            <Nav.Link id='he' href="#pricing"><strong>AloT Solutions</strong></Nav.Link>
            <Nav.Link id='he' href="#features"><strong>What"s New</strong></Nav.Link>
            <Nav.Link id='he' href="#features"><strong>Support</strong></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link className='ms-2' href="#deets"><i class="fa-regular fa-user"></i></Nav.Link>
            <Nav.Link  className='ms-2' href="#deets"><i class="fa-solid fa-map-location"></i></Nav.Link>
            <Nav.Link  className='ms-2' href="#deets"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header