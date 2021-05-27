var Input = document.querySelector("#Input");
var $Search = document.querySelector("#Search");
var forcast = document.querySelectorAll(".card-title");
sustain()""

$Search.addEventListener("click", input)
function Search(cityName) {
 
  
  var urlApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + " &appid=05e10c92e64f28acd7117c4f4a378cef"
for(var i = 0; i <forcast.length; i++ ){
  forcast[i].innerHTML= "";
}
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
              displayboard(cityName);


            })
          })
      }

      )
    });
}
function Display(cityName) {
  var data = JSON.parse(localStorage.getItem(cityName));
  console.log(JSON.parse(localStorage.getItem(cityName)));
    for (var i = 0; i < forcast.length; i++) {
    var $date = document.createElement('h3');
    $date.textContent = moment().add((i + 1), 'days').format("MMMM Do YYYY");
    var temp = document.createElement("p");
    temp.textContent = "Temp: " + data.daily[i].temp.day + "° F";
    var hum = document.createElement("p");
    hum.textContent= "Humidity: " + data.daily[i].humidity + "%";
    var wind= document.createElement("p");
    wind.textContent= "Wind: "+ data.daily[i].wind_speed + " MPH";
    var icon= document.createElement("img");
    icon.setAttribute("src", "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
    forcast[i].append($date, temp,hum,wind,icon,);
    
  };
  
};
function input(event) {
  event.preventDefault();
  var cityName = Input.value;
  Search(cityName);
  
}
function sustain(cityName) {Search("Denver")
  
};

function displayboard(cityName) {
  var data = JSON.parse(localStorage.getItem(cityName));
  console.log(JSON.parse(localStorage.getItem(cityName)));
  var $cityDate = document.querySelector("#cityDate");
 $cityDate.textContent = cityName +" " + moment().format('MMMM Do YYYY');
 var $temp = document.querySelector("#TEMP");
 $temp.textContent = " "+ data.current.temp +"° F";
 var $wind = document.querySelector("#WIND");
 $wind.textContent = " " + data.current.wind_speed + " MPH";
 var $HUMIDITY = document.querySelector("#HUMIDITY");
 $HUMIDITY.textContent= " "+ data.current.humidity + "%";
 var $UV = document.querySelector("#UV");
 $UV.textContent = " " + data.current.uvi;
};

