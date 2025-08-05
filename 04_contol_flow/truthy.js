const userEmailId = []

if(userEmailId){
    console.log("Got User Email Id.");  
}
else{
    console.log("Don't have User Email.");
}

//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values: "0", 'false', " ", [], {}, function(){}

if(userEmailId.length === 0)
    console.log("Array");

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
    
}
    