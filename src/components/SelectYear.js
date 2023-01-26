import React,{ useState } from "react";
import Finalists from './Finalists.js';

function SelectYear({ tournaments, setTournaments }){
    const [finalists, setFinalists] = useState([])
    const [game, setGame] = useState([])

    const handleOnChange = (e)=> {
        const id = e.target.value;
        const tournament = tournaments.find(tournament => tournament.id === id)
        //const gameCard = game.find(tournament => tournament.id === id)
        setGame([game, tournament])
        console.log(game)
    }

    const setFinalistCard = (id)=>{
        
    }
    return(
        <>
        <div  className="input-group mb-3" id='searchBar'>
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Select Year</label>
            </div>
            <select onChange={handleOnChange} className="custom-select search-field" id="inputGroupSelect01">
            {
                tournaments.map((tournament, index)=>{
                    return( 
                        <option  tournament={tournament} key={index} value={tournament.id}>{tournament.year}</option>
                    )
                })
            }  
            </select>
            <div id="button">
                <button id="button"
                    type="submit" 
                    className="btn btn-primary"
                    onClick={ setFinalistCard }
                    >
                    See Finalists
                </button>
            </div>
        </div>
    <Finalists games={game}/>
    </>
    )
}
/*onClick={()=> setFinalistCard(tournament.id)} */
export default SelectYear;