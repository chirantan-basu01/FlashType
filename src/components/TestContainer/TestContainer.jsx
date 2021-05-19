import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
}) => {
    return (
        <div className="test-container">
            {timeRemaining > 0 ? (
                <div data-aos="fade-up" className="typing-challenge-cont">
                    <TypingChallengeContainer
                        timerStarted={timerStarted}
                        timeRemaining={timeRemaining}
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        selectedParagraph={selectedParagraph}
                    />
                </div>
            ) : (
                <div className="try-again-cont">
                    <TryAgain words={words} characters={characters} wpm={wpm} />
                </div>
            )}
        </div>
    );
};

export default TestContainer;
