//JavaScript categorizes data types into two main groups: Primitive and Non-Primitive

// 1) PRIMITIVE DATATYPES (value)

/* a)There are seven primitive data types in JavaScript: String, Number, Boolean, Null,
    Undefined, Symbol, and BigInt.
   b)Primitive types are immutable and are passed by value; modifications create copies rather than altering the original. */

const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId)

const bigNumber = 78342154184226145n //n converts int to bigInt


//   2) NON-PRIMITIVE DATATYPE (reference)
//    a)Non-primitive types include Objects and Functions, Arrays.
//    b)Unlike primitive types, non-primitive types can hold collections of values and   
//      more complex entities.
//    c)Objects are defined using curly braces {} and can contain multiple key-value pairs,   
//      while functions can be treated as first-class objects.