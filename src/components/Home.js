import React, { useState, useEffect } from "react";
import SelectYear from './SelectYear';
import Finalists from "./Finalists";
import WinnerCard from "./WinnerCard";

function Home(){
    
    const [query, setQuery] = useState("")
    const [tournaments, setTournaments] = useState([])
    useEffect(()=> {
    fetch("http://localhost:8001/data?q" + query)
    .then((resp) => resp.json())
    .then((data) => setTournaments(data))
    }, [query])

    function handleSearch(e) {
        setQuery(e.target.value)
        console.log(query)
    }
    return(
        <div>
            <SelectYear tournaments = {tournaments} handleSearch={handleSearch}/>
            <Finalists tournaments = {tournaments}/>
            <WinnerCard/>
        </div>
    )
}

export default Home;