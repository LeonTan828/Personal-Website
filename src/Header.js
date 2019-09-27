import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        const headerItems = ["Home", "About Me", "Academics", "Interests", "Resume", "Contact Me"]

        return (
            <div className="Header">
                <div className="My-Name">
                    <b>Leon Tan</b>
                </div>
                <div className="NavBar">
                    <ul>
                        {headerItems.map(item => (
                            <li className="Header-Item">
                                <a>
                                    <b>{item}</b>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        )
    }
}

export default Header;