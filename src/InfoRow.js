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
                            people from different backgrounds and identities.
                        </Card.Text>
                        <Card.Text>
                            On August of 2015, I came to the United States to pursue my undergraduate degree.
                            I ended up in Madison, Wisconsin and have been living here ever since.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                </Card>
                <Card className="InfoRow-Card Card-Right" id="Academics-row">
                    <Card.Body className="InfoRow-Card-Content Content-Disp-Alt">
                        <Card.Title className="Card-Title Title-alt"><h2><b>Academics</b></h2></Card.Title>
                        <Card.Text>
                            I graduated from University of Wisconsin - Madison on December 2019 and was awarded
                            a B.S. in Computer Science and Biology. I am currently looking for full time software
                            engineering positions.
                        </Card.Text>
                        {/* <Button variant="primary">Find out more!</Button> */}
                    </Card.Body>
                    <div className="image-container img-alt">
                    <Image className="InfoRow-Card-Image" src={BascomPic} />
                    </div>
                </Card>
                <Card className="InfoRow-Card Card-Both" id="Work-row">
                    <Card.Body className="InfoRow-Card-Content Half-Card">
                        <Card.Title className="Card-Title WorkEx-Title"><h2><b>Work Experience</b></h2></Card.Title>
                        <Card.Text className="Work-Title"><h4>Project Coordinator</h4></Card.Text>
                        <Card.Text>
                            After I graduated, I started a volunteer position with the Academy for Surgical Coaching
                            to gain some experience. I helped setup their data management system and designed automation
                            workflow to help facilitate outreach and collaborations. The volunteer position ended up turning
                            into a paid position and I am currently still working with them. 
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="InfoRow-Card-Content Half-Card">
                        <Card.Text className="Work-Title"><h4>IAM Administrator</h4></Card.Text>
                        <Card.Text>
                            In addition to working as the Project Coordinator, I also returned to UW Madison DoIT, where I
                            used to work at while I was still a student. On top of usual administration work, I also helped out
                            with various tasks such as data analysis or process automation, which leveraged my coding skills.
                            I was also fortunate enough to shadow the team while they are redesigning their IAM system and helped out
                            with the documentations.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="InfoRow-Card-Content Half-Card">
                        <Card.Text className="Work-Title"><h4>Research Data Analyst</h4></Card.Text>
                        <Card.Text>
                            During the summer of 2019, I worked with a professor to analyze open data
                            available on the city of Madison. I decided to look at crime data and used
                            Python to generate graphs and animations from it.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="InfoRow-Card-Content Half-Card">
                        <Card.Text className="Work-Title"><h4>Junior Developer</h4></Card.Text>
                        <Card.Text>
                            For the summer of 2018, I was a Junior Developer at UW - Madison
                            DoIT Help Desk. My task was to maintain and improve the web applications
                            used by the help desk agents so that they can assist their customers more
                            effectively and efficiently.
                        </Card.Text>
                    </Card.Body>
                </Card>
         
                <Card className="InfoRow-Card Card-Left" id="Interests-row">
                    <div className="image-container image-container-small img-alt">
                    <Image className="InfoRow-Card-Image" src={MusicPic} />
                    </div>
                    <Card.Body className="InfoRow-Card-Content InfoRow-Card-Content-Small Content-Disp-Alt">
                        <Card.Title className="Card-Title Title-alt"><h2><b>Interests - Music</b></h2></Card.Title>
                        <Card.Text>
                            Although I major in STEM, I love art as well and have a great appreciation for it.
                            Of all the different forms of art available, music is my favorite.
                            Listening to music is my favorite way to relax and spend my free time.
                            The music genres that I most frequently listen to are Hip Hop, RnB and Soul.
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
                            I have never been to before.
                            The reason for this is because I find it to be the best way
                            to truly immerse myself in the local culture the place has to offer.
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
                    <div className="image-container img-alt">
                    <Image className="InfoRow-Card-Image" src={StarCraftPic} />
                    </div>
                    <Card.Body className="InfoRow-Card-Content Content-Disp-Alt">
                        <Card.Title className="Card-Title Title-alt"><h2><b>Interests - StarCraft II</b></h2></Card.Title>
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