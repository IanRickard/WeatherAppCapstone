import React from "react";
import { worldCities } from "./city-list";

export const CityName = () =>{

  // Function to generate 5 random cities:

  function generateRandomCities(){
    
    let randomCities=[];
    for(let i=0; randomCities.length<5; i++){
      const randomIndex = Math.floor(Math.random()*worldCities.length);
      let newCity=worldCities[randomIndex];
      if(!randomCities.includes(newCity)){
        randomCities.push(newCity);
      }
    }
    return randomCities;
  }

  const handleClick = (e) =>{
    
      const apiKey=`5d08d180c3412d7f84b0178e59c9d5e8`;
      const loc=e.target.id;
      console.log(loc);
      const stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
      fetch(stringPassIn)
      .then((res) => res.json())
      .then((data) => {
        const temperature = Math.trunc(data.main.temp) - 273;
        const description = data.weather[0].description;
        let searchResult = `<p>You selected ${loc}. </p> <p>temperature <b>${temperature} °C</b><br>${description}</p>`;
        document.getElementById("searchResult").innerHTML=searchResult;
      })
      .catch((err) => console.log(err));
      e.preventDefault();
  }
  
  const cityArr=generateRandomCities();
  let cityList=cityArr.map((element, index)=>{return (
  <div>
    <li key={element} onClick={handleClick} id={element}>{element}</li>
  </div>);});

  return(
    <div>
      <h2>Choose the city you're interested in! Click to see current weather :)</h2>
      <ul>{cityList}</ul>
      <h3 id="searchResult"></h3>
    </div>
  )

}