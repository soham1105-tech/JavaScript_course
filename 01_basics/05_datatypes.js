//JavaScript categorizes data types into two main groups: Primitive and Non-Primitive

// 1) PRIMITIVE DATATYPES (value)

/* a)There are seven primitive data types in JavaScript: String, Number, Boolean, Null,
    Undefined, Symbol, and BigInt.
   b)Primitive types are immutable and are passed by value; modifications create copies rather than altering the original. */

const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId)
console.table([id , anotherId])

const bigNumber = 78342154184226145n //n converts int to bigInt

let myObj = {   //declaring object
    name: "SohamRay",
    age: "20",
}
console.log(myObj.name);

const myFunction = function() {
    console.log("Hello World!");
}

console.log(typeof bigNumber) //bigint
console.log(typeof myFunction);
console.log(typeof id)



//   2) NON-PRIMITIVE DATATYPE (reference)
//    a)Non-primitive types include Objects and Functions, Arrays.
//    b)Unlike primitive types, non-primitive types can hold collections of values and   
//      more complex entities.
//    c)Objects are defined using curly braces {} and can contain multiple key-value pairs,   
//      while functions can be treated as first-class objects.

// +++++++++++++++++++++++ MEMORY +++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Primitive)

//Stack Example => Change in Value of the Variable
let actualName = "Soham Ray";
let anotherName = actualName; // Copying value
console.log(actualName, anotherName);
anotherName = "Batman"; // Changing anotherName does not affect actualName
console.log(actualName, anotherName);

//Heap Example => Change in Reference of the Value
    let userOne = {
        email: "userOne@gmail.com",
        upi: "userOne@ybl",
    }
    let userTwo = userOne; // Copying reference

    console.log(userOne, userTwo);

    userTwo.email = "userTwo@gmail.com"; // Changing userTwo affects userOne
    console.log(userOne, userTwo); // Both show the updated email


