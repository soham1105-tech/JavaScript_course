const score = 400
console.log(score);

const scoreOne = new Number(1000) //initialised as a number // more details with google console
console.log(scoreOne); //get more functions in console

console.log(scoreOne.toString().length); //converts to string to measure length
console.log(scoreOne.toFixed(3)); //adds 3 zeros after .(decimal)

const otherName = 125.897790
console.log(otherName.toPrecision(5)) //to 5 characters in start and end of decimal
console.log(scoreOne.toPrecision(3));

const hundreds = 10000000000
console.log(hundreds.toLocaleString()) //put commas with US standard
console.log(hundreds.toLocaleString('en-IN')) //in indian standards

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

console.log(Math.min(2,2,9,6,9));
console.log(Math.max(2,2,9,6,9));

console.log((Math.random() * 10) + 1) //random numbers from 1 to 10, +1 bcz it includes 0 as well
console.log(Math.floor(Math.random()*10) + 1)

const min = 100
const max = 200
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//max - min for the range
//+1 to avoid 0 case
// +min to take random number starting from min





