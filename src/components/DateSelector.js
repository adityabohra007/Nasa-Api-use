import React from 'react';
import "./styles/DateSelector.css";
const DateSelector = ({ handleSearchButton }) => {

    return(
        <div className="dateWrapper">
        <input type="date" className="dateSelector" id="date-selector"/>
        <button onClick={ () => handleSearchButton() } className="searchUniverse">Search Universe</button>
        </div>
    )
}
export default DateSelector;
