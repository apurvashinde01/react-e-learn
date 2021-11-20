import React from 'react'
import failure from "../static/images/failure.svg";
import { Card, Button, Carousel, Container } from 'react-bootstrap'

function PaymentFailure() {
    return (
        <>
            <Container>
                <img
                    className="d-block w-100 top_margin"
                    src={failure}
                    alt="First slide"
                    style={{ height: '25em' }}
                />

                <h3 className="center_text top_margin">Payment failed</h3>

                <div className="text-center">
                    <Button variant="secondary" size="lg" active>
                        Retry
                    </Button>
                </div>

            </Container>
        </>
    )
}

export default PaymentFailure
