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
                <Card className="InfoRow-Card Card-Left" id="AboutMe-row">
                    <div className="image-container">
                    <Image className="InfoRow-Card-Image" src={AboutMePic} />
                    </div>
                    
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title className="Card-Title"><h2><b>About Me</b></h2></Card.Title>
                        <Card.Text>
                            I was born and raised in Kuala Lumpur, Malaysia.
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
                <Card className="InfoRow-Card Card-Right" id="Academics-row">
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title className="Card-Title"><h2><b>Academics</b></h2></Card.Title>
                        <Card.Text>
                            I am currently pursuing a Bachelor's Degree at University of Wisconsin - Madison.
                            I double major in Computer Science and Biology and will be graduating in December of 2019.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                    <div className="image-container">
                    <Image className="InfoRow-Card-Image" src={BascomPic} />
                    </div>
                </Card>
                <Card className="InfoRow-Card Card-Both" id="Work-row">
                    <Card.Body className="InfoRow-Card-Content Half-Card">
                        <Card.Title className="Card-Title WorkEx-Title"><h2><b>Work Experience</b></h2></Card.Title>
                        <Card.Text className="Work-Title"><h4>Research Data Analyst</h4></Card.Text>
                        <Card.Text>
                            During the summer of 2019, I worked with a professor to analyze open data
                            available on the city of Madison. I decided to look at crime data and used
                            python to generate graphs and animations from it.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="InfoRow-Card-Content Half-Card">
                        <Card.Text className="Work-Title"><h4>Help Desk Student Developer</h4></Card.Text>
                        <Card.Text>
                            For the summer of 2018, I was a Student Developer at UW - Madison
                            DoIT Help Desk. My task was to maintain and improve the web applications
                            used by the help desk agents, so that they can assist their customers more
                            effectively and efficiently.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="InfoRow-Card-Content Half-Card">
                        <Card.Text className="Work-Title"><h4>Help Desk Quality Assurance</h4></Card.Text>
                        <Card.Text>
                            After having worked at the DoIT Help Desk for almost 2 years, I was
                            promoted to the position of Help Desk Quality Assurance. As HDQA, I was
                            given the opportunity to lead and assist my fellow help desk agents.
                            As such, I have gained valuable communication, critical thinking and
                            leadership skills from this position.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="InfoRow-Card-Content Half-Card">
                        <Card.Text className="Work-Title"><h4>DoIT Representative</h4></Card.Text>
                        <Card.Text>
                            In the summer of 2017, I was fortunate enough to be selected as a
                            DoIT Representative for UW - Madison's student orientation. My tasks
                            involved giving public presentations and handling Q&A sessions.
                            Through that, I was able to pick up public speaking and communication
                            skills.
                        </Card.Text>
                    </Card.Body>
                </Card>
         
                <Card className="InfoRow-Card Card-Left" id="Interests-row">
                    <div className="image-container image-container-small">
                    <Image className="InfoRow-Card-Image" src={MusicPic} />
                    </div>
                    <Card.Body className="InfoRow-Card-Content InfoRow-Card-Content-Small">
                        <Card.Title className="Card-Title"><h2><b>Interests - Music</b></h2></Card.Title>
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
                        <Card.Title className="Card-Title"><h2><b>Interests - Travelling</b></h2></Card.Title>
                        <Card.Text>
                            Another thing I like to do is to travel.
                            In fact, whenever I get the chance, I would choose to solo travel to places
                            I have never been before.
                            The reason for this is because I find it to be the best way
                            to truly immerse myself into the local culture the place has to offer.
                            It's also a great way to put myself out of my comfort zone and enable myself
                            to grow and improve in ways that I usually can't.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                    <div className="image-container">
                    <Image className="InfoRow-Card-Image" src={TravelPic} />
                    </div>
                </Card>
                <Card className="InfoRow-Card Card-Left">
                    <div className="image-container">
                    <Image className="InfoRow-Card-Image" src={StarCraftPic} />
                    </div>
                    <Card.Body className="InfoRow-Card-Content">
                        <Card.Title className="Card-Title"><h2><b>Interests - StarCraft II</b></h2></Card.Title>
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