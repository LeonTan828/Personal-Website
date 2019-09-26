import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        const headerItems = ["Home", "About Me", "Academics", "Interests", "Resume", "Contact Me"]

        return (
            <div className="Footer">
                <ul>
                    {headerItems.map(item => (
                        <li className="Footer-Item">
                            <a>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="Contact-Me">
                    phone and email here
                </div>
            </div>
        )
    }
}

export default Footer;