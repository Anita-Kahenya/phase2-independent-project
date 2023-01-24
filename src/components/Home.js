import React from "react";
import SelectYear from './SelectYear';
import Finalists from "./Finalists";
import WinnerCard from "./WinnerCard";

function Home(){
    return(
        <div>
            <SelectYear/>
            <Finalists/>
            <WinnerCard/>
        </div>
    )
}

export default Home;