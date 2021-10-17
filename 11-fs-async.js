const {readFile, writeFile, write} = require('fs')

console.log('start')

readFile('./content/first.txt','utf8',(err, result) =>{
    if(err){
        console.log(err)
        return; 
    }
    const first = result; 
    readFile('./content/second.txt','utf8',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile(
            './content/result-async.txt',
            `THIS IS THE RESULT OKOK ${first}, ${second}`,
            (err,result) =>{
                if(err){
                    console.log(err); 
                    return; 
                }
                console.log('donewith this task'); 
            }
        )

    })
})
console.log("starting next task")