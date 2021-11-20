import React from 'react'
import { Button, Form, Container, Col, Row } from 'react-bootstrap'
import './SignUp.css';

function SignUp() {
    return (
        <>
            <div class="blob">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#aef869" d="M67.2,-27.2C73.1,-3.8,54.2,22.4,30.1,39.3C6.1,56.3,-23.1,64.1,-42,51.8C-60.8,39.5,-69.4,7.1,-60.7,-20.2C-52,-47.5,-26,-69.7,2.3,-70.5C30.7,-71.3,61.4,-50.6,67.2,-27.2Z" transform="translate(100 100)" />
                </svg>
            </div>

            <Container className="top_margin">
                <Row>
                    <Col xs={1} sm={2} md={2} lg={2}>
                    </Col>

                    <Col className="glass">
                        <h3 className="top_margin">SignUp to Awesome skills</h3>
                        <Form className="top_margin">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Rate this website on 5 :P</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Click here to rate</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </Form.Select>
                            </Form.Group> */}

                            <div className="text-center top_margin">
                                <Button variant="primary" type="submit">
                                    SignUp
                                </Button>
                            </div>
                        </Form>
                    </Col>

                    <Col xs={1} sm={2} md={2} lg={2}></Col>
                </Row>
            </Container>
        </>
    )
}

export default SignUp
