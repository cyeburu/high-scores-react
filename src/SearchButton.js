import React, { useState } from "react"
import ScoresTable from "./ScoresTable"

const SearchButton = (props) => {
    const [toggleSearch, setToggleSearch] = useState([])

    function handleToggle() {
        setToggleSearch()
    }
    const list = ["time", "money", "ego"];



    return (
        <select className="selectButton" >
            <option>{list}</option>
            <option>money</option>
            onClick ={}


        </select>

    )
}


export default SearchButton;