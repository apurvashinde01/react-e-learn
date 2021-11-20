import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import CourseCard from './CourseCard'
import CourseCheckoutCard from './CourseCheckoutCard'
import PaymentDetails from './PaymentDetails'

function Cart() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={7} lg={8}
                        // className="border-end border-secondary"
                    >
                        <CourseCheckoutCard />
                        <CourseCheckoutCard />
                    </Col>

                    <Col>
                        <PaymentDetails />

                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default Cart
