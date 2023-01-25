import React from "react";

function SelectYear({ tournaments }){
    return(
        <div className="input-group mb-3" id='searchBar'>
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Select Year</label>
            </div>
            <select  className="custom-select search-field" id="inputGroupSelect01">
            {
                tournaments.map((tournament, index)=>{
                    return(
                        <option key={index} value={tournament.year}>{tournament.year}</option>
                    )
                })
            }
            </select>
        </div>    
    )
}

export default SelectYear;