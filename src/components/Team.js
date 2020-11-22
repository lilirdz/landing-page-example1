import React from "react"
import {Container, Row, Col, Image} from "react-bootstrap"
import woman1 from "../images/woman1.jpg"
import woman2 from "../images/woman2.jpg"
import woman3 from "../images/woman3.jpg"

function Team(){
    return(
        <div className="team">
            <Container>
                <Row>
                    <Col>
                        <h2>Meet Our Team</h2>
                    </Col>
                </Row>
            <Row>
                <Col>
                    <Image src={woman1} roundedCircle alt="woman" className="team-member" />
                    <Image src={woman2} roundedCircle alt="woman" className="team-member" />
                    <Image src={woman3} roundedCircle alt="woman" className="team-member" />
                </Col>
            </Row>
        
        </Container>
        </div>
    )
}

export default Team