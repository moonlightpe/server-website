import React from "react";
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

class Navigation extends React.Component<{}, {}> {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Moonlight</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="minecraft://?addExternalServer=Moonlight|moonlightpe.com:19132">Join now</Nav.Link>
                        <NavDropdown title="Links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Discord</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Store</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Vote</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Apply</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navigation