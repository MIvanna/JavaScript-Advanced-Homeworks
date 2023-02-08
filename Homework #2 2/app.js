/*Create a function that takes a string and returns the number (count) of vowels contained within it. 
(Use anonymous functions/Arrow functions for the implementation)
Ex: Code: countVowels("Pineapple"); Console: 4 vowels
BONUS: Provide the input from the HTML, and print the result on the HTML. */
let result = document.querySelector("#result");
let word = document.querySelector("#word")


function countVowels(word, count) {
    count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
            count++;
        }
    }
    if(count === 1){
    let vowel = `The word ${word} has ${count} vowel.`
    result.innerText = vowel;
    console.log(vowel)
    } else {
    let vowels = `The word ${word} has ${count} vowels.`
    result.innerText = vowels;
    console.log(vowels)
    }
}

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        if (word.value === "") {
            alert("First enter a word!")
            return
        } else {
            countVowels(word.value)
        }
        word.value = "";
    })

