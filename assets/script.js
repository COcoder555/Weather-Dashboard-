var Input = document.querySelector("#Input");
var $Search = document.querySelector("#Search");
var forcast = document.querySelectorAll(".card-title");
var data = JSON.parse(localStorage.getItem("cityName"))||[];
var $history = document.querySelector("#history");
// sustain();

$Search.addEventListener("click", input)
function Search(cityName, event) {
 
  
  var urlApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + " &appid=05e10c92e64f28acd7117c4f4a378cef"
for(var i = 0; i <forcast.length; i++ ){
  forcast[i].innerHTML= "";
}
  fetch(urlApi)
    .then(function (response) {
      response.json().then(function (response) {

        var latitude = response.coord.lat;
        var longitude = response.coord.lon;
        var urlApi2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=05e10c92e64f28acd7117c4f4a378cef"
        fetch(urlApi2)
          .then(function (response) {
            response.json().then(function (response) {
              data.push(cityName);
              localStorage.setItem("cityName", JSON.stringify(data))
              Display(response);
              displayboard(cityName,response);
              if(!event){
                history();
              }

            })
          })
      }

      )
    });
}
function Display(cityName) {
   console.log(cityName);
    for (var i = 0; i < forcast.length; i++) {
    var $date = document.createElement('h3');
    $date.textContent = moment().add((i + 1), 'days').format("MMMM Do YYYY");
    var temp = document.createElement("p");
    temp.textContent = "Temp: " + cityName.daily[i].temp.day + "° F";
    var hum = document.createElement("p");
    hum.textContent= "Humidity: " + cityName.daily[i].humidity + "%";
    var wind= document.createElement("p");
    wind.textContent= "Wind: "+ cityName.daily[i].wind_speed + " MPH";
    var icon= document.createElement("img");
    icon.setAttribute("src", "http://openweathermap.org/img/wn/" + cityName.daily[i].weather[0].icon + "@2x.png");
    forcast[i].append($date, temp,hum,wind,icon,);
    
  };
  
};
function input(event) {
  event.preventDefault();
  var cityName = Input.value;
  Search(cityName);
  
}
// function sustain(cityName) {Search("Denver")
  
// };

function history() {
  console.log(data);

  
  $history.innerHTML="";
  for(var i = 0; i < data.length; i ++){
  var historyButton = document.createElement("button");
  historyButton.textContent = data[i];
  $history.append(historyButton);
  };
  // historyButton(){
  //   // Display();
  // }
};
history();

function historyClick(event){
  
  Search(event.target.textContent,event)
  console.log(event.target.textContent);
  
};
$history.addEventListener("click",historyClick);


function displayboard(cityName,response) {

  var $cityDate = document.querySelector("#cityDate");
 $cityDate.textContent = cityName +" " + moment().format('MMMM Do YYYY');
 var $temp = document.querySelector("#TEMP");
 $temp.textContent = " "+ response.current.temp +"° F";
 var $wind = document.querySelector("#WIND");
 $wind.textContent = " " + response.current.wind_speed + " MPH";
 var $HUMIDITY = document.querySelector("#HUMIDITY");
 $HUMIDITY.textContent= " "+ response.current.humidity + "%";
 var $UV = document.querySelector("#UV");
 $UV.textContent = " " + response.current.uvi;
};

