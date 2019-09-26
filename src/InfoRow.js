import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import './InfoRow.css'


const PATH_TO_IMG = require('./assets/images/workinprogress.jpg')

class InfoRow extends React.Component {
    render() {
        return(
            <div className="InfoRow">
                <Card className="InfoRow-Card Card-Left">
                    <Image className="InfoRow-Card-Image" src={PATH_TO_IMG} fluid />
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title>About Me</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Find out more!</Button>
                    </Card.Body>
                </Card>
                <Card className="InfoRow-Card Card-Right">
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title>Fill in later</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Find out more!</Button>
                    </Card.Body>
                    <Image className="InfoRow-Card-Image" src={PATH_TO_IMG} fluid />
                </Card>
                
            </div>
        )
    }
}

export default InfoRow