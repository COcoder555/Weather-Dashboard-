# Weather Dashboard
* Weather Dashboard gives the user  current, up to date, weather infromation as well as a five day forcast.

## Construction of the Landing Page: HTML, style.css, script.js
        
### HTML:
* I created a basic index.html file in which I created :
    * boilerplat html
    * a link to bootstrap. 
    * a line to moment.js for the dates that would be needed be rendured in the script.js file. 
    * a "container" to which in I created in bootstrap:
    * *  a Search bar 
    * *  5 cards for the five day forcast
    * *  a large card for the current weather
* I created a div for the buttons to create space for the buttons that would be generated from the Search history function.

### style.css: 
* I targted multiple classes in the HTML to change:
 * * Background colors
 * * Text size
 * * Font size
 * * Border styling
 * * Font Weight
 * * Margin
 * * Height

 ### script.js:
 * I grabbed  ID's and Class elements and stored them in variables.
 * I created a Search function 
 * I  added a click function even listner to the Search button.
 * I created a function to Display the information  for the 5 day forcast in the cards I created in the HTML using bootstrap.
     * * Inside this function a loop was neccisary to get the information in sequential order according to the date. 

 * I created an input function that stores the imput value of the user into variable called cityName and excutes the Search function.    
 * I created a history button that crates a button based of the users search history. 
 * I created a fucntion to display the current weather on the display board. 

[Weather Dashboard](https://cocoder555.github.io/Weather-Dashboard-/)
![Screenshot](./assets/WDB.png)