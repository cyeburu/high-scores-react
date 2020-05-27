import React from "react"
import ScoreData from './ScoreData.js';
import ScoresTable from "./ScoresTable.js";


function PlayerScores() {
    let playersScores = ScoreData[1];
    return (<div>
        <ScoresTable scores={playersScores} />
    </div>
    )
}
export default PlayerScores;