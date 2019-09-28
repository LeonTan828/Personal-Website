import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="My-Name">
                    <a href="#page-top">
                        <b>Leon Tan</b>
                    </a>
                </div>
                <div>
                    <ul className="NavBar">
                        <li className="Header-Item">
                            <a href="#AboutMe-row">
                                <b>About Me</b>
                            </a>
                        </li>
                        <li className="Header-Item">
                            <a href="#Academics-row">
                                <b>Academics</b>
                            </a>
                        </li>
                        <li className="Header-Item">
                            <a href="#Interests-row">
                                <b>Interests</b>
                            </a>
                        </li>
                        <li className="Header-Item">
                            <a>
                                <b>Resume</b>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Header;