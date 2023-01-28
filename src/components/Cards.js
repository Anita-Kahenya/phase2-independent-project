import { useState } from "react";
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
        
        <div  className="card finalsCard" onClick={handleClick}>
            <div className="content">
                <h1><span><img src="https://flagpedia.net/data/flags/h120/zawebp"></img></span>{year}</h1>
                <h2>{runner_up}</h2>Vs
                <h2>{champion}</h2>
            </div>
        </div>   
    )
}
/* 
   
*/
export default Cards;