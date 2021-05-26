var Input = document.querySelector("#Input");
var $Search = document.querySelector("#Search");

$Search.addEventListener("click", Search)
function Search(event) {
  event.preventDefault()
  var cityName = Input.value;
  var urlApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + " &appid=05e10c92e64f28acd7117c4f4a378cef"

  fetch(urlApi)
    .then(function (response) {
      response.json().then(function (data) {

        var latitude = data.coord.lat;
        var longitude = data.coord.lon;
        var urlApi2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=05e10c92e64f28acd7117c4f4a378cef"
        fetch(urlApi2)
          .then(function (response) {
            response.json().then(function (data) {
              localStorage.setItem(cityName, JSON.stringify(data))
              Display(cityName);
              Display1(cityName);


            })
          })
      }

      )
    });
}
function Display(cityName) {
  var data = JSON.parse(localStorage.getItem(cityName));
  console.log(JSON.parse(localStorage.getItem(cityName)));
  var forcast = document.querySelectorAll(".card-title");
  for (var i = 0; i < forcast.length; i++) {
    var $date = document.createElement('h3');
    $date.textContent = moment().add((i + 1), 'days').format("MMMM Do YYYY");
    var temp = document.createElement("p");
    temp.textContent = "Temp: " + data.daily[i].temp.day + "° F";
    var hum = document.createElement("p");
    hum.textContent= "Humidity: " + data.daily[i].humidity;
    var wind= document.createElement("p");
    wind.textContent= "Wind: "+ data.daily[i].wind_speed;

    forcast[i].append($date, temp,hum,wind,);
    
  };
  
};

// function Display1(cityName) {
//   var data = JSON.parse(localStorage.getItem(cityName));
//   console.log(JSON.parse(localStorage.getItem(cityName)));
//   var currentDay = document.querySelector(".board");
//   var wind= document.createElement("p");
//   wind.textContent= "Wind: "+ data.daily.wind_speed;
//  currentDay.append(wind1);
// };

