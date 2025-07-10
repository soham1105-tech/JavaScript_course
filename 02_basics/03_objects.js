//singleton
//1. Object.create

//object literals

const mySym =  Symbol("key1") //declaration of symbol

const JsUser = {
    name: "Soham",
    "Full Name": "Soham Ray",
    age: 19,
    [mySym]: "mykey1",
    email: "raysoham11@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}
console.log(JsUser.name); //wrong way of accessing object value
console.log(JsUser["email"]); //right and perfect way of accessing, " " coz behind "email" is treated as string...
console.log(JsUser["Full Name"]); //only way of accessing full name
//console.log(JsUser.mySym);
//console.log(typeof JsUser.mySym); //typeof predicts it as a string
//so we need to insert mysym in [] so...

console.log(typeof JsUser[mySym])

//to change any value in object
JsUser.email = ""

