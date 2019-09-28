import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        const footerItems = ["Email", "LinkedIn", "GitHub", "Resume"]

        return (
            <div className="Footer">
                <ul className="Footer-List">
                    {footerItems.map(item => (
                        <li className="Footer-Item">
                            <a className="links">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Footer;