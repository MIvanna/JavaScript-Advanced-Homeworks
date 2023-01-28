//Function that takes a number through a parameter and returns how many digits that number has
let firstExercise = document.querySelector("#firstExercise");

let digitsInNumber = (number) => {
    let digits = number.toString().length;
    console.log(`Number has ${digits} digits.`)
}
digitsInNumber(564)

//Function that takes a number through a parameter and returns if its even or odd

let evenOrOddNumber = (number) => {
    if(number % 2 === 0){
        console.log("Number is even.")
    } else {
        console.log("Number is odd.")
    }
}
evenOrOddNumber(46)

//Function that takes a number through a parameter and returns if its positive or negative

let positiveOrNegativeNumber = (number) => {
    if(number < 0){
        console.log("Number is negative.")
    } else if(number === 0) {
        console.log("Number is 0.")
    } else if (number > 0){
        console.log("Number is positive.")
    }
}
positiveOrNegativeNumber(-8)

console.log("*************************************")

//BONUS: Create a function that takes a number through a parameter and calls all three functions 
// for the number that was passed. It should show the results in the console. 

// Ex: Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative */

let getNumberStats = function(number){
     return digitsInNumber(number), evenOrOddNumber(number), positiveOrNegativeNumber(number)
}
getNumberStats(57)