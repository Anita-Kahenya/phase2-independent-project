import React, { useState, useEffect } from "react";
import SelectYear from './SelectYear';
import Finalists from "./Finalists";
import WinnerCard from "./WinnerCard";

function Home(){
    //setting state for api data
    const [tournaments, setTournaments] = useState([])
    //query for searchbar
    const [query, setQuery] = useState("")

    //setting selected card to display
    const [display, setDisplay] = useState("matches")
    const [finalsToDisplay, setFinalsToDisplay] = useState({})

    useEffect(()=> {
    fetch("https://api.jsonbin.io/v3/b/63d6bb1face6f33a22cca359/?q=" + query, {
    method: "GET",
    headers: {'X-Master-Key': '$2b$10$2z8TQNznBtftDC4YRxGzMOGhVhPr3LDk.4DCB/RPtKWVNDFhcI4TK'},
    contentType: 'application/json',
    })
    .then((resp) => resp.json())
    .then((data) => setTournaments(data))
    }, [query])
    
    console.log(tounaments)
    function handleSearch(e) {
        e.preventDefault()
        setQuery(e.target.value) 
    }

    return(
        <div className="main">
            <SelectYear tournaments = {tournaments} handleSearch={handleSearch}/>
            {
                display === "matches" ? 
                <Finalists setDisplay={setDisplay} setFinalsToDisplay={setFinalsToDisplay} tournaments={tournaments} />         
                 : 
                <WinnerCard setDisplay={setDisplay} finals={finalsToDisplay}  /> 
            }
        </div>
    )
}
/* */
export default Home;