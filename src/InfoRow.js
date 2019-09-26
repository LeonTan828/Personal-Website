import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import './InfoRow.css'


const PATH_TO_IMG = require('./assets/images/workinprogress.jpg')
const PATH_TO_IMG1 = require('./assets/images/KL.jpg')
const PATH_TO_IMG2 = require('./assets/images/Bascom.jpg')

class InfoRow extends React.Component {
    render() {
        return(
            <div className="InfoRow">
                <Card className="InfoRow-Card Card-Left">
                    <Image className="InfoRow-Card-Image1" src={PATH_TO_IMG1} fluid />
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title className="Card-Title"><b>About Me</b></Card.Title>
                        <Card.Text>
                            My name is Leon Tan and I was born and raised in Kuala Lumpur, Malaysia.
                            Kuala Lumpur is a unique and vibrant multicultural city in South East Asia.
                            Growing up there has given me the privilege to learn and interact with
                            people from different background and identity.
                        </Card.Text>
                        <Card.Text>
                            On August of 2015, I came to the United States to pursue my Undergraduate degree.
                            I ended up in Madison, Wisconsin and has been living here ever since.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                </Card>
                <Card className="InfoRow-Card Card-Right">
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title className="Card-Title"><b>Academics and career</b></Card.Title>
                        <Card.Text>
                            I am currently pursuing a Bachelor's Degree at University of Wisconsin - Madison.
                            I double major in Computer Science and Biology and will be graduating in December of 2019.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                    <Image className="InfoRow-Card-Image" src={PATH_TO_IMG2} fluid />
                </Card>
                
            </div>
        )
    }
}

export default InfoRow