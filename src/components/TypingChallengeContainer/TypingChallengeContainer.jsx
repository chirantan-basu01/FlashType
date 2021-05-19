import React from 'react';
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer = ({ words, characters, wpm }) => {
    return (
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* words typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                {/* characters typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters}
                />
                {/* speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>
            {/* the real challenge */}
            <div className="typewriter-container">
                <TypingChallenge selectedParagraph="hello world!!" />
            </div>
        </div>
    );
};

export default TypingChallengeContainer;
