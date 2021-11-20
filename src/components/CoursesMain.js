import React from 'react'
import { Container, Form, FormControl, Col, Row, Navbar, NavDropdown, Button, Pagination } from 'react-bootstrap'
import { Link } from "react-router-dom";
import CourseList from './CourseList';

function CoursesMain() {

    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Row>
                        <Col xs={6} sm={5} md={7} lg={7}>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Col>

                        <Col >
                            <NavDropdown title="Filter">
                                <Link to="/WebDev" className="unlink">
                                    <NavDropdown.Item>Web Dev</NavDropdown.Item>
                                </Link>
                                <Link to="/AI" className="unlink">
                                    <NavDropdown.Item >Artificial Intelligence</NavDropdown.Item>
                                </Link>
                                <Link to="/ML" className="unlink">
                                    <NavDropdown.Item >Machine Learning</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </Col>
                        <Col >
                            <NavDropdown title="Sort">
                                <Link to="/PHL" className="unlink">
                                    <NavDropdown.Item>Price: High to Low</NavDropdown.Item>
                                </Link>
                                <Link to="/PLH" className="unlink">
                                    <NavDropdown.Item >Price: Low to High</NavDropdown.Item>
                                </Link>
                                <Link to="/popularity" className="unlink">
                                    <NavDropdown.Item >Popularity</NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                        </Col>
                    </Row>
                </Container>
            </Navbar>

            <br />
            <CourseList />

        </>
    )
}

export default CoursesMain
