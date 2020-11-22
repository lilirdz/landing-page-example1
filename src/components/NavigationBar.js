import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

function NavigationBar(){

    const style ={
        color: "#000000",
        textTransform: "uppercase"
    }
    return(
        <div>
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    Becoming You
                </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link style={style} as={Link} to="#">
                Passion & Purpose
                </Nav.Link>
                <Nav.Link style={style} as={Link} to="#">
                Body
                </Nav.Link>
                <Nav.Link style={style} as={Link} to="#">
                Mind
                </Nav.Link>
                <Nav.Link style={style} as={Link} to="#">
                Soul
                </Nav.Link>
                </Nav>
                <Nav className="navbar-right">
                <Nav.Link style={style} as={Link} to="#">
                About
                </Nav.Link>
                <Nav.Link style={style} as={Link} to="#">
                Account
                </Nav.Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar