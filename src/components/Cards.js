import { useEffect, useState } from "react";
function Cards({tournament, setDisplay, setFinalsToDisplay, container}){
    const {year,champion,runner_up} = tournament;
    
    function handleClick(){
        if(!container) {
            setFinalsToDisplay(tournament)
            setDisplay("specs")
        } else {
            console.log(tournament)
        }
    }
    const [flag, setFlag] = useState("")
    /*useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/{name}?fullText=true`)
        .then((res) => res.image())
        .then((data) => setFlag(data))
    }, [])*/
    return(
        
                <div className='col-sm-2'>
                            <span  className="card" onClick={handleClick}>
                                <h1>{year}</h1>
                                <h2><span><img src='https://flagcdn.com/16x12/ke/png' alt='flag'></img></span>{champion}</h2>Vs
                                <h2>{runner_up}</h2>
                            </span>
                </div>   
    )
}
/* 
   
*/
export default Cards;