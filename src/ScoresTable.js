import React from "react";
import OneCountryTable from "./OneCountryTable"

// This should display the table country name and scores for every country
function ScoresTable(props) {
    return (
        <div className="container">

            <div className="row">
                <p className="boardTitle">
                    High Scores Per Country
           </p>
                <ul>{props.scoreBoardData.sort((a, b) => a.name < b.name ? -1 : 1).map((country, index) => {
                    return (
                        <OneCountryTable countryName={country.name} countryScores={country.scores} key={index} />
                    )
                })}
                </ul>
            </div>
        </div>
    )
}
export default ScoresTable;