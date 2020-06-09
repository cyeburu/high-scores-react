import React from "react";
import ScoreData from './ScoreData.js';
import ScoresTable from "./ScoresTable.js";


function CountryScores() {


    return (
        <div>
            <ScoresTable scoreBoardData={ScoreData} />

        </div>
    )
}
export default CountryScores; 