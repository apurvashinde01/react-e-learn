import React from 'react'
import { Col, Container, Card, Row, Button } from 'react-bootstrap'
import default_course from "../static/images/default_course.jpg";
import { Link } from "react-router-dom";

function DashboardCourseView() {
    return (
        <>
            <Container className="border border-primary rounded" style={{ marginTop: '1em', marginBottom: '1em' }}>
                <Row>
                    <Col
                        style={{ padding: '2em' }}
                        xs={12} sm={5} md={5} lg={5}
                    >
                        <Card.Img src={default_course} />
                    </Col>

                    <Col>
                        <Card.Body style={{ padding: '2em' }} >
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="success" size="lg">
                                Continue Course
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DashboardCourseView
