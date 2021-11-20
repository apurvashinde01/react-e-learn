import React from 'react'
import { Container, Form, FormControl, Col, Row, Navbar, Pagination } from 'react-bootstrap'
import { Link } from "react-router-dom";
import CourseCard from './CourseCard';

function CourseList() {
    // let active = 2;
    // let items = [];
    // for (let number = 1; number <= 5; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }

    return (
        <>
            <Container>
                <Row>
                    <Col><CourseCard /></Col>
                    <Col><CourseCard />
                        {/* <br />
                        <Pagination style={{ marginInline: '5em' }}>{items}</Pagination> */}
                    </Col>
                    <Col><CourseCard /></Col>
                </Row>

            </Container>
        </>
    )
}

export default CourseList
