//for of
//[" ", " ", " "]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World";
for (const char of greetings) {
    console.log(char);
}

const map = new Map()
map.set('IN', "India") //key : value
map.set('USA', "United States of America")
map.set("Fr", "France")
map.set('IN', "India") //prints unique value

console.log(map)

//Using forof loop to print each one / deconstruct

for (const [key, value] of map) {
    console.log(key, " :- ", value);
}

//Print object using forof loop

const myObject = {
    game1 : "NFS",
    game2 : "Spiderman",
    game3 : "God of War"
}

/* for (const [key, value] of myObject) {
    console.log(key, " :- ", value); //not iterable
} */

    console.log(myObject);
    