//const tinderUser = new Object() //singleton object

const tinderUser = {} //non-Singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstName: "Soham",
            lastName: "Ray",
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstName); //this is how to access single element which is inside object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4) //Object.assign(target,source)
//{empty object}

const obj3 = {...obj1, ...obj2} //by spread operator
console.log(obj3);

console.log(Object.keys(tinderUser)); //Object.keys converts object property to array
console.log(Object.values(tinderUser)); //Object.values converts object values to array
console.log(Object.entries(tinderUser)); //[keys:values]

console.log(tinderUser.hasOwnProperty('name')); //checks if property is present or not

//destructuring an object

const course = {
    courseName : "JavaScript",
    price : "Free",
    courseInstructor : "Soham",
}

const {courseInstructor : instructor} = course;
console.log(instructor);

[
    {},
    {},
    {}
]