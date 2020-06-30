import React from "react"


const SearchButton = (props) => {
    function handleToggle() {
        props.setToggle(!props.toggle)
    }
    return (
        <button className="selectButton" onClick={handleToggle} >
            Sort
        </button >
    )
}
export default SearchButton;