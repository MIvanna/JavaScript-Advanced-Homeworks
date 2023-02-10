/*Get bordering countries function
Call the countries API for a country by code.
Create a function that gets all the neighbours from a country and returns them in console
When the call to the countires API for a country is made imidietly show the bordering countries in the console
Example:
Call -> MKD
In console:
Conutry:
macedonia object
Neighbours:
albania object
greece object
bulgaria object
serbia object
Countries Api Documentations; https://restcountries.com/v3.1/alpha/{code} */

let countryCode = document.querySelector("#country");
let btn = document.querySelector("#btn");

let getCountryApi = async () => {
    try {
        // let countryRequest = await fetch("https://restcountries.com/v3.1/alpha/pe")
        let countryRequest = await fetch(`https://restcountries.com/v3.1/alpha/${country.value}`);
        let countryResult = await countryRequest.json();
        console.log(countryResult[0].name, countryResult);

        let countryBorders = countryResult[0].borders;
        console.log(countryBorders);

        countryBorders.map(async (code) => {
            let response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
            let result = await response.json();
            console.log(result)
        })
    }
    catch (error) {
        console.log("Error catched. No found results.")
        console.log(error)
    }
}


btn.addEventListener("click", (e) => {
    e.preventDefault();
    getCountryApi();
    countryCode.value = "";
})

