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