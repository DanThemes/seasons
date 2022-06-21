import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Summer',
        iconName: 'sun'
    },
    winter: {
        text: 'Winter',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat >= 0 ? 'summer' : 'winter'
    }
    return lat < 0 ? 'winter' : 'summer'
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[ season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon ${iconName}`} />
            <h1>{text}</h1>
            <i className={`icon ${iconName}`} />
        </div>
    );
};

export default SeasonDisplay;