import React from "react";

function About() {
  return (
    <div className="about">
      <div className="trophyImg">
        <img src="https://w7.pngwing.com/pngs/68/154/png-transparent-fifa-world-cup-trophy-2022-fifa-world-cup-2018-fifa-world-cup-2014-fifa-world-cup-2010-fifa-world-cup-unofficial-football-world-championships-football-sport-sports-football-player-thumbnail.png" alt="world cup png"></img>
      </div>
      <div className="aboutPage">
      <h1>FIFA WORLD CUP</h1>
      <h2>HISTORY</h2>
      <p>
        The FIFA World Cup is the most prestigious football competition in the world.
        It is also the most watched sporting event in the world having a viewership of <a href="https://worldsoccertalk.com/2022/05/04/how-many-people-watch-the-world-cup/">562 million</a> during the 2022 finals. 
        Played every four years, the World Cup hosts the top 32 national teams in a monthlong tournament. 
        The host country is selected by FIFA's Council.
      </p>
      <h2>AWARDS</h2>
      <h4>GOLDEN BALL</h4>
      <p>
        First introduced in 1982, the Golden Ball award is presented to the FIFA World Cup tournament's best player.
      </p>
      <p>
        <span id="bold">Argentina's</span> Lionel Messi became the only man to win the Award twice, in 2014 and 2022. 
      </p>
      <h4>GOLDEN BOOT</h4>
      <p>
        The top goal scorer (or goal scorers in the event of a tie) is awarded the Golden Boot.
      </p>
      <p>
          Just Fontaine from <span id="bold">France</span> holds the record for most scored goals at the event having scored 13 goals during the 1958 tournament. 
      </p>
      <h4>GOLDEN GLOVES</h4>
      <p>
        The Golden Gloves award has been given to the top performing goalkeeper of the tournament since 1994.
      </p>
      <h4>BEST YOUNG PLAYER</h4>
      <p>
        Players 21 years old and younger are eligible for the Best Young Player award.
      </p>
      </div>
    </div>
  )
}

export default About;