/**Exercise 1
Create a function that makes api call to the url: "https://swapi.dev/api/people"
After you retrieve the data print the first character in the HTML.
Example:
Character Name: Luke Skywalker
Character Height: 172
Character BirthYear: 19BBY */

let btn = document.querySelector("#btn");
let firstResult = document.querySelector("#firstResult");

function getSwapiPeople() {
    $.ajax({
        url: "https://swapi.dev/api/people",
        method: "GET",

        success: function (response) {
            console.log("Results of SWAPI people:");
            console.log(response)
            printResults(response.results)
        },

        error: function (error) {
            console.log(error);
        }
    })
}

btn.addEventListener('click', function () {
    getSwapiPeople();
})

function printResults(resultArray) {
    console.log(resultArray)
    firstResult.innerText +=
        `
        The first character is: ${resultArray[0].name}`
}

/*Exercise 2
Create a function that makes api call to the url "https://swapi.dev/api/planets"
After the data is retrived print the planets on the HTML */

let btnTwo = document.querySelector("#btnTwo");
let secondResult = document.querySelector("#secondResult");

function getSwapiPlanets() {
    $.ajax({
        url: "https://swapi.dev/api/planets",
        method: "GET",

        success: function (response) {
            console.log("Results of SWAPI planets:");
            console.log(response);
            printPlanets(response.results)
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function printPlanets(arrayOfPlanets){
    secondResult.innerHTML = "";

    for(let i = 0; i < arrayOfPlanets.length; i++){
        secondResult.innerHTML += `
        <ul>
            <li> ${arrayOfPlanets[i].name} </li>
        </ul>
        `
    }
}

btnTwo.addEventListener('click', function(){
    getSwapiPlanets()
})

/*BONUS: Exercise 3
Find out in the documentation how can you request for 
"specific character resource"
Using that url, make API request to get the data
After you get the data, create a function that is going to print it 
in the HTML the properties: "birth_year, eye_color, name, homeworld"
IMPORTANT: the property homeworld, should be informations of the 
homeworld not the url ;)
HINT: You would have to do, a api request with the homeworld 
property value to retrieve it's infomartion. */
