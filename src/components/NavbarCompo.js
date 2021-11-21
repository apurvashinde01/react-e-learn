import React from 'react'
import { Badge, Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function NavbarCompo() {
    return (
        <Navbar className="shadow bg-white rounded">
            <Container>
                <Navbar.Brand href="#">
                    <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-degree-skill-building-inipagistudio-mixed-inipagistudio.png" />
                </Navbar.Brand>
                <Navbar.Toggle />

                <Nav className="justify-content-end sans bold_font">
                    <Link to="/Dashboard" className="unlink">
                        <Nav.Link href="Dashboard">Dashboard</Nav.Link>
                    </Link>

                    <Link to="/Courses" className="unlink">
                        <Nav.Link href="Courses">Courses offered</Nav.Link>
                    </Link>

                    <Link to="/SignUp" className="unlink">
                        <Nav.Link href="SignUp">SignUp</Nav.Link>
                    </Link>
                    <Link to="/SignIn" className="unlink">
                        <Nav.Link href="SignIn">SignIn</Nav.Link>
                    </Link>

                    <Link to="/Cart">
                        <Button variant="light">
                            <img
                                style={{ height: '1.7em' }}
                                src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" />
                            <Badge bg="danger" >2</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                    </Link>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default NavbarCompo
