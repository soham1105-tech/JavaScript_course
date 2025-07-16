//Immediately invoked Function expression

(function chai() { //named iife
    console.log(`DB CONNECTED.`);
})(); //always use semicolon

//()() (function definition block)(function execuetion block)
/* Global scope pollution occurs when variables or functions unintentionally overwrite existing global variables.
By using IIFEs, developers can create a fresh scope for their variables, which helps maintain the global environment's cleanliness.
It is particularly important in larger applications where multiple scripts may interact. */


( (name) => { //passed argument
    console.log(`DB CONNECTED 2 ${name}`);
    
}) ("Soham"); //parameter

( (num1 , num2 ) => { //
    let add = num1 + num2;
    console.log(`Addition of ${num1} and ${num2} is :`,add);  
})(34,56)