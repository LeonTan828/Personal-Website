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
                        <Card.Title className="Card-Title">About Me</Card.Title>
                        <Card.Text>
                            My name is Leon Tan and I was born and raised in Kuala Lumpur, Malaysia.
                            Kuala Lumpur is a unique and vibrant multicultural city in South East Asia
                            and has definitely played an important role in shaping who I am today.
                            I am glad to have grew up there as it has allowed me to learn and interact with
                            people from different background and identity; something that I realized
                            not many people have the privilege to experience.
                        </Card.Text>
                        <Card.Text>
                            On August of 2015, I came to the United States to pursue my Undergraduate degree.
                            I ended up in Madison, Wisconsin and has been living here for more than 4 years.
                            Coming abroad has been the best decision that I have made yet.
                            This is because being so far from home and out of my comfort zone has
                            motivated me to try new things and expand on my experiences.
                            In fact, I have since experienced a huge personal growth and became a better
                            person that I was.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                </Card>
                <Card className="InfoRow-Card Card-Right">
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title className="Card-Title">Fill in later</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                    <Image className="InfoRow-Card-Image" src={PATH_TO_IMG} fluid />
                </Card>
                
            </div>
        )
    }
}

export default InfoRow