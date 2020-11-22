import React from "react"
import {Container, Row, Col} from "react-bootstrap"


function ContactForm(){
    return(
        <div className="contact-form">
            <Container >
                <Row>
                    <Col>
                        <h2>Stay up to date on services</h2>
                        <p className="sign-up-text">Sign up to receive emails</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <form className="subscribe-form">
                        <input type="text" name="fname" placeholder="Name" className="name" />
                        <input type="email" name="email" placeholder="Email" className="email" />
                    </form>
                    </Col>
                </Row>
                    
                
                <Row className="contact-form-row2">
                    <Col >
                    <button type="submit" className="form-subscribe-btn">Subscribe</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactForm