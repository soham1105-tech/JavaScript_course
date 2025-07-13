
var c =300; //outside {} are global scope
let a = 500;

if(true) {      //{} if inside curly braces => local/block scope
    let a = 10;        //an ideal dataype is that it can't be accessed outside local scope
    const b = 20; //var c is not an ideal suitable datatype
    var c = 30;
    console.log("INNER: ",a);
    
}
    

console.log(a);
//console.log(b); //undefined as it cannot be accessed outside local variable
console.log(c); //output 30

//Nested Function
function one() {
    const username = "Soham"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    
    //two();
}
one();

//Nested if statement 
if(true) {
    const username = "Soham"
    if(username === "Soham") {
        const website = " YouTube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username); //username cannot be accessed outside the scope


//+++++++++++++++++++++++++++++ Hoisting ++++++++++++++++++++++++
console.log(addOne(5)); //can be used before initialisation

function addOne(num1) {
    return num1 + 1;
}

//console.log(addTwo(5)); //addTwo cannot be used before initialization

const addTwo = function (num1) { 
    return num1 + 2;
}
console.log(addTwo(5));
