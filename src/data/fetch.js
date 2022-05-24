export function get(endpoint) {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!DATA.hasOwnProperty(endpoint)) {
        const validEndpoints = Object.keys(DATA)
          .map((endpoint) => ` - "${endpoint}"`)
          .join("\n ");
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
      }

      const response = { status: 200, data: DATA[endpoint] };

      resolve(response);
    }, delay);
  });
}

const handleSubmit = (e) =>{
    
  const apiKey=`5d08d180c3412d7f84b0178e59c9d5e8`;
  const loc=e.target.value;
  console.log(loc);
  const stringPassIn = `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${apiKey}`;
  fetch(stringPassIn)
  .then((res) => res.json())
  .then((data) => {
    const temperature = Math.trunc(data.list.main.temp) - 273;
    const description = data.list.weather[0].description;
    let searchResult = `<p>You selected ${loc}. </p> <p>temperature <b>${temperature} °C</b><br>${description}</p>`;
    document.getElementById("searchResult").innerHTML=searchResult;
  })
  .catch((err) => console.log(err));
  e.preventDefault();
}