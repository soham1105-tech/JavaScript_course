let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));
console.log(valueInNumber); //NaN

// "33" => 33
// "33abc" => NaN(Not a Number)
// true = 1

let isLoggedIn = "1"
let booleanIsLoggedIn = Boolean(1);
console.log(booleanIsLoggedIn);

//"" => false
//"Soham" => true

let someNumber = 4356798
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)