import React from 'react'
import { Accordion, Container, FormControl, InputGroup, Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

function PayMode() {
    const navigate = useNavigate();

    return (
        <>
            <Container style={{ marginTop: '2em' }}>
                <Row>
                    <Col xs={1} sm={2} md={2} lg={2}>
                    </Col>

                    <Col>
                        <Row>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" style={{ padding: '1em' }}>
                                    <Accordion.Header>Card</Accordion.Header>
                                    <Accordion.Body>
                                        {/* <Row className="border-bottom" style={{ marginTop: '2em' }} > */}
                                        <h6>Re-enter code code_here to confirm order</h6>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Enter code"
                                            />

                                            <Button onClick={() => {
                                                navigate('/PaySuccess')
                                            }}
                                                variant="outline-success" id="button-addon2">
                                                Confirm
                                            </Button>

                                        </InputGroup>
                                        <p>*Payment API integration dev in progress! 🚧</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" style={{ padding: '1em' }}>
                                    <Accordion.Header>UPI</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>  Coming Soon! 🔜</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Col>

                    <Col xs={1} sm={2} md={2} lg={2}>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PayMode
