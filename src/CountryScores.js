import React from "react";
import ScoreData from './ScoreData.js';
import ScoresTable from "./ScoresTable.js";


const CountryScores = () => {
    let listItems = ScoreData
    return (
        <div>
            <ScoresTable list={listItems} />
        </div>
    )
}
export default CountryScores;