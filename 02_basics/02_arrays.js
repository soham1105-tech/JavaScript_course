const marvel_heroes = ["Thor", "Spiderman", "Ironman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); //array inside array //array is a single element here
console.log(marvel_heroes[3]) //array is a single element here

const heroes = marvel_heroes.concat(dc_heroes)
console.log(heroes);