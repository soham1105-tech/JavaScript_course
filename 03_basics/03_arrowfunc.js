const user = {
    name: "Soham Ray",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.name}, Welcome to Website.`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.name = "Bruce Wayne"
// user.welcomeMessage()

// console.log(this)

function chai() {
    let username = "Soham Ray"
    console.log(this.username); //undefined
}

chai()

//basic syntax for arrow function : 
// () => {}

    const addTwo = (num1,num2) =>  (num1 + num2); //when used not used {} not use return //implicit return
    console.log(addTwo(90 , 89));
    
    const addThree = (num1,num2,num3) => { //when used {} explicit function
        return num1+ num2 + num3;
    }

    const userName = () => ({username: "Soham Ray"}) //use({}) when returning object
    console.log(userName);

    const myArray = [2,5,6,7,8,9]; //can also mbe used
    myArray.forEach (() => {})
    