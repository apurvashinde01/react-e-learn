import React from 'react'
import { Button, Form, Container, Col, Row } from 'react-bootstrap'

function SignIn() {
    return (
        <>
            <div class="blob">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#d9f50a" d="M49.4,-52.9C58,-40.8,54.8,-20.4,53.6,-1.2C52.4,18,53.2,36.1,44.6,49.4C36.1,62.8,18,71.4,-0.8,72.2C-19.5,73,-39.1,65.8,-52.8,52.4C-66.5,39.1,-74.4,19.5,-72.9,1.5C-71.4,-16.5,-60.5,-33,-46.8,-45.1C-33,-57.1,-16.5,-64.7,1.9,-66.6C20.4,-68.6,40.8,-64.9,49.4,-52.9Z" transform="translate(100 100)" />
                </svg>
            </div>

            <Container className="top_margin">
                <Row>
                    <Col xs={1} sm={2} md={2} lg={2}>
                    </Col>

                    <Col className="glass">
                        <h3 className="top_margin">SignIn</h3>
                        <Form className="top_margin">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <div className="text-center top_margin">
                                <Button variant="primary" type="submit">
                                    SignIn
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

export default SignIn
