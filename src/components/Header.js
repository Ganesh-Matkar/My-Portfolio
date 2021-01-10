import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function Header(){
    return (
        <div className="header">
        <Navbar expand="lg">
            <Navbar.Brand href="#home"><img className="logo" src="../Images/logo.png" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarData" />
            <Navbar.Collapse id="navbarData">
                <Nav className="ml-auto">
                    <Nav.Link className="navlink" href="/">HOME</Nav.Link>
                    <Nav.Link className="navlink" href="#about">ABOUT</Nav.Link>
                    <Nav.Link className="navlink" href="#skills">SKILLS</Nav.Link>
                    <Nav.Link className="navlink" href="#Qualification">QUALIFICATION</Nav.Link>
                    <Nav.Link className="navlink" href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default Header;