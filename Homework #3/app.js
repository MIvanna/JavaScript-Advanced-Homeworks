/*Exercise 1
There is a JSON file with students. 
Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24 
All male students with a name starting with B and average grade over 2

Use higher order functions to find the answers Link: 
https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json */

let btn = document.querySelector("#btn");
let resultP = document.querySelector("#resultP");

function getStudentInfo() {
    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",

        success: function (response) {
            console.log("RESPONSE:");
            let resultParsed = JSON.parse(response);
            //console.log(resultParsed);

            console.log("1. All students with an average grade higher than 3:")
            let averageMoreThan3 = resultParsed.filter((student) => { return student.averageGrade > 3 })
            console.log(averageMoreThan3)

            console.log("2. All female student names with an average grade of 5:")
            let femaleGrade5 = resultParsed.filter((student) => {
                return student.gender === "Female" && student.averageGrade === 5
            });
            console.log(femaleGrade5)

            console.log("3. All male student full names who live in Skopje and are over 18 years old:")
            let maleSkopjeAdult = resultParsed
                .filter((student) => {
                    return student.city === "Skopje" && student.age > 18 && student.gender === "Male"
                }).map((student) => {
                    return `${student.firstName} ${student.lastName}`
                })
            console.log(maleSkopjeAdult)

            console.log("4. The average grades of all female students over the age of 24:")
            let averageGradeFemaleOver24 =
                resultParsed.filter((student) => {
                    return student.gender === "Female" && student.age > 24
                }).map((student) => {
                    return student.averageGrade
                })
            console.log(averageGradeFemaleOver24)

            console.log("5. All male students with a name starting with B and average grade over 2:")
            let maleStudentsB = resultParsed.filter((student) => {
                return student.gender === "Male", student.averageGrade > 2, student.firstName.startsWith("B")
            })
            console.log(maleStudentsB);
        },

        error: function (error) {
            console.log("ERROR:");
            console.log(error);
        }
    })
}

btn.addEventListener('click', function () {
    getStudentInfo();
})
