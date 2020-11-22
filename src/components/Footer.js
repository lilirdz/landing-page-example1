import React from "react";
import {Container, Row, Col} from "react-bootstrap"

function Footer(){
    return(
        <div className="footer">
            <Container fluid>
                <Row>
            <Col>
                <h3>Products</h3>
                <ul className="footer-list">
                    <li><a href="/#">Features</a></li>
                    <li><a href="/#">Pricing</a></li>
                    <li><a href="/#">Support</a></li>
                </ul>
            </Col>
            <Col>
                <h3>Company</h3>
                <ul className="footer-list">
                    <li><a href="/#">About Us</a></li>
                    <li><a href="/#">Team</a></li>
                    <li><a href="/#">Contact</a></li>
                </ul>
            </Col>
            <Col md={4}>
                <h3>Subscribe</h3>
                <p className="subscribe-text">Get access to the latest news and all the features by subscribing here now</p>
                <form>
                <input name="email" type="email" placeholder="Email" className="email-box" /><button type="submit" className="subscribe-btn">Subscribe</button>
                </form>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Footer