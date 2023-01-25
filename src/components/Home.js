import React, { useState, useEffect } from "react";
import SelectYear from './SelectYear';
import Finalists from "./Finalists";
import WinnerCard from "./WinnerCard";

function Home(){
    const [tournaments, setTournaments] = useState([])
    useEffect(()=> {
    fetch('http://localhost:8001/data')
    .then((resp) => resp.json())
    .then((data) => setTournaments(data))
    }, [])
    return(
        <div>
            <SelectYear tournaments = {tournaments}/>
            <Finalists/>
            <WinnerCard/>
        </div>
    )
}

export default Home;