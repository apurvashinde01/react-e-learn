import React from 'react'
import { Col, Container, Form, Image, Nav, Row, Tab, Button, Tabs } from 'react-bootstrap'
import DashboardCourseView from './DashboardCourseView'
import default_learner from "../static/images/default_learner.jpg";

function UserProfile() {
    return (
        <>
            <Container className="top_margin">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Enrolled & Bookmarked</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Password Reset</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="forth">SignOut</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                    <Container>
                                        <Row>
                                            <Col xs={4} sm={4} md={4} lg={4}>
                                            </Col>

                                            <Col>
                                                <Image
                                                    style={{ height: '15em' }}
                                                    src={default_learner} roundedCircle />
                                                <h6 className="center_text">@username_here</h6>
                                            </Col>

                                            <Col xs={4} sm={4} md={4} lg={4}>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <p>Courses Enrolled :</p>
                                            <p>Courses Completed:</p>

                                        </Row>

                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="first">

                                    <Tabs defaultActiveKey="Enrolled" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="Enrolled" title="Enrolled">
                                            <DashboardCourseView />
                                            <DashboardCourseView />
                                            <DashboardCourseView />
                                        </Tab>
                                        <Tab eventKey="Bookmarked" title="Bookmarked">
                                            <DashboardCourseView />
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Container className="top_margin">
                                        <Row>
                                            <Col xs={1} sm={2} md={2} lg={2}>
                                            </Col>

                                            <Col>
                                                <Form className="top_margin">

                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Re-enter Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" />
                                                    </Form.Group>

                                                    <div className="text-center top_margin">
                                                        <Button variant="primary" type="submit">
                                                            Confirm Password
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </Col>

                                            <Col xs={1} sm={2} md={2} lg={2}></Col>
                                        </Row>
                                    </Container>


                                </Tab.Pane>
                                <Tab.Pane eventKey="forth">

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    )
}

export default UserProfile
