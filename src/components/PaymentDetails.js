import React from 'react'
import { FormControl, InputGroup, Button, Row, Container, Table } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

function PaymentDetails() {
    const navigate = useNavigate();
    
    return (
        <>
            <Container>
                <Row className="border-bottom" style={{ marginTop: '2em' }} >
                    <h3>COUPON</h3>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter Coupon Code"
                        />
                        <Button variant="outline-success" id="button-addon2">
                            Apply
                        </Button>
                    </InputGroup>
                </Row>

                <Row style={{ marginTop: '1em' }}>
                    <h3>PRICE DETAILS</h3>

                    <Table borderless responsive>
                        <tbody>
                            <tr>
                                <td colSpan="2">Price</td>
                                <td>$25</td>
                            </tr>
                            <tr>
                                <td colSpan="2">After Discount</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Coupon Discount</td>
                                <td>$0</td>
                            </tr>
                            <hr />
                            <tr bordered >
                                <td colSpan="2">Total Price</td>
                                <td>$25</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Button onClick={()=>{
                        navigate('/Pay')
                    }} variant="primary" size="lg">
                        Proceed to Pay
                    </Button>
                    
                </Row>

            </Container>
        </>
    )
}

export default PaymentDetails
