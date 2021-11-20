import React from 'react'
import { Card, Button, Carousel, Container } from 'react-bootstrap'
import EnrolledCourseView from './EnrolledCourseView';
import { Link, useNavigate } from "react-router-dom";

function PaymentSuccess() {
    const navigate = useNavigate();
    return (
        <>
            <Container >
                <br />
                <h2 className="center_text">Successfully Enrolled 🎉</h2>
                <br />
                <Carousel variant="dark">
                    <Carousel.Item>
                        <EnrolledCourseView />
                    </Carousel.Item>
                    <Carousel.Item>
                        <EnrolledCourseView />
                    </Carousel.Item>
                    <Carousel.Item>
                        <EnrolledCourseView />
                    </Carousel.Item>
                </Carousel>
                <div className="d-grid gap-2">
                    <Button onClick={() => {
                        navigate('/Account')
                    }}
                        variant="primary" size="lg">
                        View All Enrolled Courses
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default PaymentSuccess
