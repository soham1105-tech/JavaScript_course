const name = "SohamRay"
const countRepo = 50

console.log(name + countRepo + " Value") // Outdated method

//Modern method of String interpolation
console.log(`Hello my name is ${name} and my Repo Count is ${countRepo}`);

const gameName = new String('SohamBatman') //more useful in Google Console
//some functions of string
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__); // treat as object
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,5) //prints string < 5 i.e. upto 4 ignores neg value
console.log(newString);

const anotherString = gameName.slice(-10,5) //prints string < 5 i.e. upto 4 can take neg value as well
console.log(anotherString);

const newStringOne = "    Soham.    "
console.log(newStringOne.trim()); //removes starting as well as ending white space as well \n.

const url = "https://www.instagram.com/soohummm%20"
console.log(url.replace('%20','/')) //replaces a specific character from string to another

console.log(url.includes('soohummm')); //boolean value if the string is present or not

const newstring = new String("Soham_hc_com")
console.log(newstring.split('_')); //splits string into arrays on the basis of '_'

