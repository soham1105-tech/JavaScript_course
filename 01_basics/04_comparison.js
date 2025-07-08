console.log(null > 0); //false as (>) converts null to number (zero)
console.log(null == 0); //false as (==) converts null to undefined
console.log(null >= 0); //true as (>=) converts null to numbers

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// === strictly checks values including its datatype
console.log("2" == 2) //true as same number not datatype
console.log("2" === 2) //false as datatype different

//WE NEED TO AVOID THIS TYPE OF CONVERSIONS AS IT CREATES INCONSISTENCY IN LANGUAGE