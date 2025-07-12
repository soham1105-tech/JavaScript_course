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

function calculateCartPrice(...num1) { //...rest/spread operator converts multiple arguments to arrays
    return num1;
}
console.log(calculateCartPrice(200, 500, 600, 2000));

const user = {
    username: "Soham",
    price: 199
}

function handleUserObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleUserObject(user);
//can also be called in this step
handleUserObject({
    username: "Bruce Wayne",
    price: "100,000,000,000$"
})

const myNewArray = [200,400,600];
function return2ndvalue(getnewarray) {
    return getnewarray[1];
}
console.log(return2ndvalue(myNewArray));
console.log(return2ndvalue([200,800,900]));

