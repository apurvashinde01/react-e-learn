import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import default_course from "../static/images/default_course.jpg";
import { Link } from "react-router-dom";

function CourseCard() {
    return (
        <>
            <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src={default_course} />
                <Card.Body>
                    <Card.Title>Course Title<Badge style={{ marginLeft: '1em' }} bg="success">New</Badge>
                    </Card.Title>
                    <Card.Text>
                        Course Descrip
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                    <Card.Text>
                        {/* Full Star */}
                        <Link to="/bookmark">
                            <img src="https://img.icons8.com/fluency/48/000000/star.png"
                                style={{ height: '1.5em' }}
                            />
                        </Link>

                        {/* Half Star */}
                        <Link to="/bookmark">
                            <img src="https://img.icons8.com/fluency/48/000000/star-half-empty.png"
                                style={{ height: '1.5em' }}
                            />
                        </Link>

                        {/* Empty Star */}
                        <Link to="/bookmark">
                            <img src="https://img.icons8.com/color/48/000000/star--v1.png"
                                style={{ height: '1.5em' }}
                            />
                        </Link>
                    </Card.Text>

                    <Link to="/Cart">
                        <Button variant="primary">Enroll</Button>
                    </Link>
                    <Link to="/Account">
                        <img src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon--v1.png"
                            style={{ height: '1.5em', marginLeft: '1em' }}
                        />
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default CourseCard
