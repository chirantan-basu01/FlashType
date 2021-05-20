import React from 'react';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './App.css';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime = 60;
const ServiceUrl = 'http://metaphorpsum.com/paragraphs/1/9';

class App extends React.Component {
    state = {
        selectedParagraph: 'i am chirantan',
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: [],
    };

    componentDidMount() {
        // fetch(ServiceUrl)
        //     .then((response) => response.text())
        //     .then((data) => {
        //         this.setState({ selectedParagraph: data });
        //     });
        const selectedParagraphArray = this.state.selectedParagraph.split('');
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: 'notAttempted',
            };
        });
        this.setState({ testInfo });
    }

    render() {
        return (
            <div className="app">
                {/* Nav section */}
                <Nav />

                {/* Landing Page */}
                <Landing />

                {/* Challenge section */}
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                />

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}
export default App;
