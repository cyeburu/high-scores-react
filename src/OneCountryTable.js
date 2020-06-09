import React from "react"



function OneCountryTable(props) {
    return (
        <div className="playerScore" >

            <span className="playerName" > {props.score.n} </span>
            <span className="playerScore" > {props.score.s}</span>
        </div>
    )



}
export default OneCountryTable;