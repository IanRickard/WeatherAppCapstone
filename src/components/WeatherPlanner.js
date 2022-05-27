import React, {useState} from "react";
import { AddActivityForm } from "./AddActivityForm";
import { Activity } from "./Activity";
import generateId from "../data/utility";

export default function WeatherPlanner(){
  const [weatherinfo,setWeatherinfo]=useState([]);

  const handleClick = (e) =>{
    
    const apiKey=process.env.REACT_APP_WEATHERAPP_API_KEY;
    const loc=document.getElementById("user-city").value;
    console.log(loc);
    const stringPassIn = `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${apiKey}`;
    console.log(stringPassIn);
    fetch(stringPassIn)
    .then((res) => res.json())
    .then((data) => {
      const result=data.list.slice(0,8);
      console.log(result);
      setWeatherinfo(result);
      console.log(weatherinfo);
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
      <br></br>
      <div id="table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature</th>
              <th>Feels like</th>
              <th>Weather</th>
            </tr>
          </thead>
          <tbody>{weatherinfo.map((item)=>(
            <tr key={item.dt}>
              <td>{item.dt_txt}</td>
              <td>{(item.main.temp-273.15).toFixed(2)}°C</td>
              <td>{(item.main.feels_like-273.15).toFixed(2)}°C</td>
              <td>{item.weather[0].description}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
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