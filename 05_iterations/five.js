const coding = ["JS", "Python", "Java", "C++", "Ruby", "Swift"]

coding.forEach( function (val) { //use of forEach function
    console.log(val);
})

coding.forEach( /*greet =*/ () => {}) //in arrow function

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})

const mycoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName); //helpful in databases
})

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

//Using forEach loop

const myNums2 = [1,2,3,4,5,6,7,8,9,10]
myNums2.forEach( (num) => {
    if (num > 4) {
        console.log(num);
    }
})