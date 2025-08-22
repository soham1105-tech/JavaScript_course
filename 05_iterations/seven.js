const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNums = myNumbers.map( (num) => num + 10 );
console.log(myNums);
// Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myTotal = myNums1.reduce( function (acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval;
}, 3)
console.log(myTotal);

const myTotal1 = myNums1.reduce( (acc, currval) => acc + currval, 3);
console.log(myTotal1);
// Output: 58

