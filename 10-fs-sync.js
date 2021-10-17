const {readFileSync, writeFileSync} = require('fs')
console.log("Start")

// reads content of file and saves it in variable
const first = readFileSync("./content/first.txt",'utf8')
const second = readFileSync("./content/second.txt",'utf8')


// writes file to results-sync.txt 
//if it doesnt exist it will create that file 
// the flag at the end determines if it completely rewerite the file
//or it append the content to the end of the text
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
    )

console.log("done with this task")
console.log("starting the next one")


