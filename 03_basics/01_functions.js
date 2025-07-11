function addTwoNumbers(num1,num2) { //num1 , num2 are parameters
    console.log(num1 + num2);
}
addTwoNumbers() //NaN
addTwoNumbers(4 , 6) //4 , 6 are arguments

const result = addTwoNumbers( 9 , 100 )
console.log("result: " , result); // 109 // result: undefined


function addTwoNums(num1,num2) { //num1 , num2 are parameters
    let result = num1 + num2;
    return result
    console.log("Soham") //nothing gets printed after return statement

}




function addTwoNums1(num1,num2) {
    return num1 + num2;
}
console.log("result: ", addTwoNums1(7 , 9));

function loginUserMsg(username) {
    if (!username) {
        console.log("Please enter a UserName");
        return        
    }
    return `${username} just logged in...`
}

console.log(loginUserMsg("")); //if not username is passed it assumes it as undefined

