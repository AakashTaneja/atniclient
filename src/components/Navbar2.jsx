import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar2(){
    return(
        <div>
            <Navbar bg="primary" expand="md" className="p-0">
            <Container className="p-0" >
                <Navbar.Brand href="/"> <img class="navbar-brand" className="hamaralogo" src="atni_new3.png" alt="and the news is..." height="100"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    
                    <Nav.Link href="/about" style={{color:"orange"}}>About</Nav.Link>
                    <Nav.Link href="/contact" style={{color:"orange"}}>Contact</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>

       

    );
}

export default Navbar2;