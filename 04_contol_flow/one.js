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

if(userLoggedIn && debitCard && courseJS)
    console.log("Allow to buy JavaScript Course.");

if(loggedInFromGoogle || loggedInFromEmail)
    console.log("User logged in.");
    
    