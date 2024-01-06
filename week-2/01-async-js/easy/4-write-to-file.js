const fs = require("fs")

fs.writeFile("week-2/01-async-js/easy/abc.txt"," My Name is Swayam Duhan", "utf-8", (err)=>{
    console.log(err)
})