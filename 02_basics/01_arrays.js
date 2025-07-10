//Arrays

const myArr = [0, 1, 7, "Soham", true, null, undefined] //can contain different datatypes
const dcHeroes = new Array("Batman", "Superman", "Aquaman", "Flash")

console.log(myArr)
console.log(myArr[3])
console.log(dcHeroes);

//Array Methods

myArr.push(800)
console.log(myArr)

dcHeroes.push("Thor") //adds element in the last in array
dcHeroes.pop() //deletes element in the last in array
console.log(dcHeroes);

myArr.unshift("Bruce") //adds element in the first in array
myArr.shift() //deletes element in the first in array
console.log(myArr);

console.log(myArr.includes(0)); // checks if value is present or not
console.log(myArr.indexOf(9)) //-1 indicates not present in the array

const newArr = dcHeroes.join()
console.log(newArr); //converts array to string

//slice, splice
const numArr = new Array(0,1,2,3,4,5)
console.log("A", numArr); //A [ 0, 1, 2, 3, 4, 5 ]

const numArr1 = numArr.slice(1,3)
console.log(numArr1); //[ 1, 2 ]
console.log("B",numArr); //B [ 0, 1, 2, 3, 4, 5 ]

const numArr2 = numArr.splice(1,3)
console.log(numArr2);//[ 1, 2, 3 ]
console.log("C",numArr);//C [ 0, 4, 5 ]







