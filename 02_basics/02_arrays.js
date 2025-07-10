const marvel_heroes = ["Thor", "Spiderman", "Ironman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

//marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); //array inside array //array is a single element here
console.log(marvel_heroes[3]) //array is a single element here

const heroes = marvel_heroes.concat(dc_heroes)
console.log(heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); //spread all the array elements in one array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)// it breaks all the subarrays into the parent array 
console.log(real_another_array);

console.log(Array.isArray("Soham")); //checks if the given string is array or not
console.log(Array.from("Soham")); //converts the given string to array
console.log(Array.from({name: "Soham"})) //

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //creates array from given elements




