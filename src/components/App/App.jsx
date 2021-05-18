import React from 'react';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* Nav section */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Challenge section */}

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}
export default App;
