import React from "react"
import {Container, Row, Col} from "react-bootstrap"


function OurServices(){
    return(
        <div className="services">
            <Container >
              <Row className="services-row1">
                <Col>
                  <h2>Some meaningful blurb...</h2>
                </Col>
              </Row>
              <Row className="services-row2">
                <Col>
                    <div className="box1">
                      <p>What</p>
                    </div>
                </Col>
                <Col>
                <div className="box2">
                  <p>We</p>
                </div>
                </Col>
                <Col>
                  <div className="box3">
                    <p>Offer</p>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
    )
}

export default OurServices