import React from "react"



function OneCountryTable(props) {
    return (
        <div className="countryTable">
            <div className="countryName">High Scores: {props.countryName}</div>

            {props.countryScores.sort((a, b) => a.s > b.s ? -1 : 1).map((playerAndScore, index) => {
                return (

                    <div className="playerScore" key={index}>

                        <span className="playerName" > {playerAndScore.n} </span>
                        <span className="playerScore" > {playerAndScore.s}</span>
                    </div>
                )
            })}
        </div>
    )
}
export default OneCountryTable;