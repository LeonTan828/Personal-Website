import React from 'react';
import Header from './Header'
import AppJumbotron from './AppJumbotron'
import InfoRow from './InfoRow'
import Footer from './Footer'

// TODO: Display Text
// TODO: Style Text
// TODO: Display background image

class Display extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <AppJumbotron />
                <InfoRow />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Display;