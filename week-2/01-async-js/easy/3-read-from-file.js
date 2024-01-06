const fs = require("fs")



fs.readFile("D:/COHORT ASSIGNMENTS/week-2/01-async-js/easy/abc.txt", "utf-8", (err, data)=>{
    if (err){
        console.log(err)
    }
    console.log(data)
})

// an expensive function to realise the async nature of readFile
let sum = 0
for (let i = 0; i < 1000000000; i++){
    sum += i
}