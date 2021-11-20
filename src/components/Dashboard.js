import React from 'react'
import { Container, Button, Carousel } from 'react-bootstrap'
import CoursesMain from './CoursesMain'
import DashboardCourseView from './DashboardCourseView'
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    return (
        <>
            {/* Enrolled Courses */}
            <Container className="top_margin">
                <div>
                    <h4 className="center_text">Enrolled Courses
                        <Button onClick={() => {
                            navigate('/Account')
                        }} style={{ float: 'right' }} variant="outline-secondary" size="lg">
                            View All
                        </Button></h4>
                </div>
                <br />

                <Carousel variant="dark">
                    <Carousel.Item>
                        <DashboardCourseView />
                    </Carousel.Item>
                    <Carousel.Item>
                        <DashboardCourseView />
                    </Carousel.Item>
                    <Carousel.Item>
                        <DashboardCourseView />
                    </Carousel.Item>
                </Carousel>

            </Container>

            <br />
            {/* Explore more */}
            <Container>
                <h4 className="center_text">Explore Courses</h4>
                <CoursesMain />
            </Container>

        </>
    )
}

export default Dashboard
