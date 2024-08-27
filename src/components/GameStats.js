import React from 'react'
import "./GameStats.css"

const GameStats = ({ gameStats }) => {
    const { level, points, linesCompleted, linesPerLevel } = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;


    return (
        <ul className="GameStats GameStats__right">
            <li>Level</li>
            <li style={{color: '#858585', fontWeight: 'bolder', marginBottom: '50px'} } className="Value">{level}</li>
            <li>Lines to next level</li>
            <li style={{color: '#858585', fontWeight: 'bolder', marginBottom: '50px'} } className="Value">{linesToLevel}</li>
            <li>Points</li>
            <li style={{color: '#858585', fontWeight: 'bolder', marginBottom: '50px'} } className="Value">{points}</li>
        </ul>
    )
}
export default React.memo(GameStats)