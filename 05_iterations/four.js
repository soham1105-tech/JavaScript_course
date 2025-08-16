const myObject = {
    JS : "JavaScript",
    cpp : "C++",
    Rb : "Ruby",
    swift : "Swift by Apple"
}
//using for in loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); //
}                 //key values            // object values

const programming = ["JS", "Python", "C++", "Swift", "Ruby"];
//using for in loop to access the elements of the array
for (const key in programming) {
    //console.log(key); // 0  1   2   3   4
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set("Fr", "France")
map.set('IN', "India")

for (const key in map) {
    console.log(map[key]); //doesn't print the map
}

