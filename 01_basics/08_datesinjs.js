//Dates 

let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let myCreatedDate = new Date(2005, 10, 6) // 0 => January
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());
console.log(myDate.getTime())

myDate.toLocaleString('default' , {
    weekday : "long",
    timeZone : ""
})
