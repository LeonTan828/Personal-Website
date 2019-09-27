import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import './InfoRow.css'


const PATH_TO_IMG = require('./assets/images/workinprogress.jpg')
const AboutMePic = require('./assets/images/KL.jpg')
const BascomPic = require('./assets/images/Bascom.jpg')
const MusicPic = require('./assets/images/Music.jpg')
const TravelPic = require('./assets/images/NatPark.jpg')
const StarCraftPic = require('./assets/images/StarCraft.jpg')

class InfoRow extends React.Component {
    render() {
        return(
            <div className="InfoRow">
                <Card className="InfoRow-Card Card-Left">
                    <Image className="InfoRow-Card-Image" src={AboutMePic} />
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
                    <Image className="InfoRow-Card-Image" src={BascomPic} />
                </Card>
                <Card className="InfoRow-Card Card-Left">
                    <Image className="InfoRow-Card-Image-Small" src={MusicPic} />
                    <Card.Body className="InfoRow-Card-Content InfoRow-Card-Content-Small">
                        <Card.Title className="Card-Title"><b>Interests - Music</b></Card.Title>
                        <Card.Text>
                            Although I major in STEM, I love art as well and have a great appreciation for it.
                            Of all the different forms of art available, music is my favourite.
                            Listening to music is my favorite way to relax and spend my free time.
                            The music genre that I most frequently listen to are Hip Hop, RnB and Soul.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                </Card>
                <Card className="InfoRow-Card Card-Right">
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title className="Card-Title"><b>Interests - Travelling</b></Card.Title>
                        <Card.Text>
                            Another thing I like to do is to travel.
                            In fact, whenever I get the chance, I would choose to solo travel to a place
                            I have never been before.
                            The reason for this is because I find it to be the best way
                            to truly immerse myself into the local culture the place has to offer.
                            It's also a great way to put myself out of my comfort zone and enable myself
                            to grow and improve in ways that I usually can't.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                    <Image className="InfoRow-Card-Image" src={TravelPic} />
                </Card>
                <Card className="InfoRow-Card Card-Left">
                    <Image className="InfoRow-Card-Image" src={StarCraftPic} />
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title className="Card-Title"><b>Interests - StarCraft II</b></Card.Title>
                        <Card.Text>
                            I am also an avid StarCraft II player and I started playing this game 2 years ago.
                            Through StarCraft, I have improved my critical thinking, problem-solving, multitasking and organizational skills.
                            Though I only started playing not too long ago, it has quickly grown to become my favorite game.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default InfoRow