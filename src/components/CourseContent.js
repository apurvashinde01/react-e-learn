import React, { useState } from 'react'
import { Offcanvas, Button, Container, Image, Accordion, Row, Col, Table } from 'react-bootstrap'
import default_course from "../static/images/default_course.jpg";

function CourseContent() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <Button variant="primary" onClick={handleShow}>
                    Index
                </Button>

                {/* Table of Contents for Course */}
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>

                        <Offcanvas.Title>Course Name</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <Container>
                            <Image src={default_course} style={{ height: '10.5em' }} />
                        </Container>

                        <Container className="top_margin">
                            <Accordion defaultActiveKey="0">

                                {/* Module compo */}
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Module 1</Accordion.Header>
                                    <Accordion.Body>
                                        <Table hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        {/* course compo */}
                                                        {/* onclick -> close canvas, push chapter */}
                                                        <a href="#" className="unlink">
                                                            C1
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>

                        </Container>

                    </Offcanvas.Body>
                </Offcanvas>

            </Container>

            {/* Course Content here */}
            <Container className="top_margin">
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>

                    <Col>
                        <h4>Course Title</h4>

                        <div class="iframe_container top_margin">
                            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/SjX1lRtJdAg" allowFullScreen></iframe>
                        </div>

                        <h6 class="top_margin">Summary & Resources</h6>
                        <p class="top_margin">
                            Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.
                        </p>

                        <h6 class="top_margin">Footnotes 📝</h6>
                        <p>Use generated pseudo elements
                        </p>
                        <p> Use generated pseudo elements
                        </p>
                        <p>Use generated pseudo elements
                        </p>
                    </Col>

                    <Col xs={2} sm={2} md={1} lg={1}>

                    </Col>
                </Row>



            </Container>

        </>
    )
}

export default CourseContent
