import React from "react"
import {Container, Row, Col} from "react-bootstrap"


function Hero(){
    return(
        <div className="hero">
            <Container>
                <Row className="hero-row">
                    <Col>
                        <h2>Are you ready to simplify your life?</h2>
                     </Col>
                </Row>
                <Row className="hero-row2">
                    <Col>
                    <a href="/#"><button className="learn-more-btn">Learn More</button></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero