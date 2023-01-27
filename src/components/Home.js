import React, { useState, useEffect } from "react";
import SelectYear from './SelectYear';
import Finalists from "./Finalists";
import WinnerCard from "./WinnerCard";

function Home(){

    const [tournaments, setTournaments] = useState([])
    const [games, setGames] = useState([])
    const [query, setQuery] = useState("")
    
    const [display, setDisplay] = useState("matches")
    const [finalsToDisplay, setFinalsToDisplay] = useState({})

    useEffect(()=> {
    fetch("http://localhost:8001/data?q" + query)
    .then((resp) => resp.json())
    .then((data) => setTournaments(data))
    }, [query])

    function handleSearch(e) {
        e.preventDefault()
        setQuery(e.target.value)
        console.log(query)
        const finalist = tournaments.map((tournament) => tournament.year === query)
        console.log(finalist) 
        setGames([...games, finalist])
        console.log(games)
    }
    const finalistDisplay = tournaments.map(tournament => <Finalists setDisplay={setDisplay} 
        setFinalsToDisplay={setFinalsToDisplay} 
        tournament={tournament} 
        key={tournament.id}/>
        )
        
    return(
        <div>
            <SelectYear tournaments = {tournaments} handleSearch={handleSearch}/>
            {
                display === "collection" ? 
                {finalistDisplay}
                 : 
                <WinnerCard setDisplay={setDisplay} finals={finalsToDisplay}  /> 
            }
        </div>
    )
}

export default Home;