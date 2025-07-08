const accountId = 144553;
let accountEmail = "soham@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState; //undefined when a vaariablem is declared but not given any value...

// accountId = 2; // Not Allowed
console.log(accountId);

accountEmail = "soham.ray.24@aot.edu.in"
accountPassword = "123456"
accountCity = "Kolkata"

console.table([ accountEmail, accountId, accountPassword, accountCity, accountState])

{
    //scope
}

/*
Prefer not to use var because of issue in block scope 
and functional scope
*/