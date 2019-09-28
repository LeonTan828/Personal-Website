import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        const footerItems = ["Email", "LinkedIn", "GitHub", "Resume"]

        return (
            <div className="Footer">
                <ul className="Footer-List">
                    <li className="Footer-Item">
                        <a className="links" href="mailto:tan49@wisc.com">
                            Email
                        </a>
                    </li>
                    <li className="Footer-Item">
                        <a className="links" href="https://www.linkedin.com/in/leon-yl-tan">
                            LinkedIn
                        </a>
                    </li>
                    <li className="Footer-Item">
                        <a className="links" href="https://github.com/LeonTan828">
                            GitHub
                        </a>
                    </li>
                    <li className="Footer-Item">
                        <a className="links">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;