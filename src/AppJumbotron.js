import React from 'react'
import Typed from 'typed.js';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import './AppJumbotron.css'

class AppJumbotron extends React.Component {
    constructor(props) {
        super(props);
        // Note: Regular JavaScript way.
        // const ghostWriterDOMElement = document.getElementsByClassName("ghost-writer")[0];

        // Note: React way
        this.ghostWriterRef = React.createRef();
    }

    componentDidMount = () => {
        var options = {
            strings: ['<b>Hello!</b>', '<b>My name is Leon Tan</b>', '<b>Welcome to my personal website</b>', '<b>Scroll down to learn more about me!</b>'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        // Note: Regular JavaScript way
        // this.typed = new Typed(ghostWriterDOMElement, options);
        this.typed = new Typed(this.ghostWriterRef.current, options);
    }

    componentWillUnmount() {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }

    render() {
        return (
            <div className="AppJumbotron">
                <Jumbotron className="jumbotron-custom" fluid>
                    <Container>
                        <div className="ghost-writer" ref={this.ghostWriterRef}></div>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default AppJumbotron