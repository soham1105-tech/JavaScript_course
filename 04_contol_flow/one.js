// Types of Relational operator: >, <, >=, <=, ==, !=, ===, !==
if(2 === "2"){
    console.log("Executed");
}
else{
    console.log("Not executed")
}

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}
//console.log(`User Power: ${power}`); //Power not defined

const userLoggedIn = true
const debitCard = true
const courseJS = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && courseJS) //logical operators
    console.log("Allow to buy JavaScript Course.");

if(loggedInFromGoogle || loggedInFromEmail)
    console.log("User logged in.");

//Nullish Coalescing Operator ?? : null undefined

let val1, val2, val3;
val1 = 5 ?? 10
val2 = null ?? 20
val3 = undefined ?? 30
console.log(val1)
console.log(val2)
console.log(val3)

//condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


    