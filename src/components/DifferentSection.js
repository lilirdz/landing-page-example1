import React from "react"
import {Container, Jumbotron} from "react-bootstrap"


function DifferentSection(){
    return(
        <div className="different-section">
            <Container>
                <Jumbotron className="diff-container">
                    <h2>How we are different</h2>
                    <a href="/#"><button className="learn-more-btn">Learn More</button></a>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default DifferentSection