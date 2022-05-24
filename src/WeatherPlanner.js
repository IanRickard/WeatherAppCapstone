import React, {useState} from "react";
import { AddActivityForm } from "./AddActivityForm";
import { Activity } from "./Activity";
import generateId from "./utility";

export default function WeatherPlanner(){
  const handleClick = (e) =>{
    
    const apiKey=`5d08d180c3412d7f84b0178e59c9d5e8`;
    const loc=document.getElementById("user-city").value;
    console.log(loc);
    const stringPassIn = `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${apiKey}`;
    console.log(stringPassIn);
    fetch(stringPassIn)
    .then((res) => res.json())
    .then((data) => {
      const temperature = Math.trunc(data.list[0].main.temp) - 273;
      console.log(temperature);
      const description = data.list[0].weather[0].description;
      let searchResult = `<p>You selected ${loc}. </p> <p>temperature <b>${temperature} °C</b><br>${description}</p>`;
      document.getElementById("searchResult").innerHTML=searchResult;
    })
    .catch((err) => console.log(err));
    e.preventDefault();
  } 

  const [activities, setActivities] = useState([
    {
      id: generateId(),
      text: 'This is a place to plan your activities.',
    },
  ]);

  const addActivity = (activity) => {
    setActivities(prev=>[...prev, activity]);
  };

  const removeActivity = (activityIdToRemove) => {
    setActivities ( (activities) => 
      activities.filter((activity) => activity.id !== activityIdToRemove)
    );
  };

  // Input the name of city you prefer
  // If error, request to enter a valid city name
  // On submit, generate weather forecast for 1day or 7 days
  // Input area for user to add to-do-list of activities planned according to weather


  return (
    <main>
      <h2>
        Plan your day according to weather!
      </h2>
      <div id="forecast">
        <p>
          Enter the city of your choice:
        </p>
      </div>
      <input type="text" id="user-city" />
      <button onClick={handleClick}>Submit</button>
      <p id="searchResult"></p>
      <br></br>
      <div id="planner">
        <AddActivityForm addActivity={addActivity} />
          <ul className="activities">
            {activities.map((activity) => (
              <Activity key={activity.id} activity={activity} removeActivity={removeActivity} />
            ))}
          </ul>
      </div>
    </main>
  )
}