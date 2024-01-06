const fs = require("fs");

// bigger method
function clean(originalString) {
  let originalArray = originalString.split(" ");
  const arrayWithoutSpaces = originalArray.filter((item) => item !== "");
  const stringWithoutSpaces = arrayWithoutSpaces.join(" ");
  return stringWithoutSpaces;
}

fs.readFile("week-2/01-async-js/medium/dirtytext.txt", "utf-8", (err, data)=>{
    if (err){
        console.log(err)
    }
    data = clean(data)
    console.log(data)
})



//easier method (using regular expression)
function easyClean(originalString){
    const cleanedString = originalString.replace(/\s+/g, " ")
    return cleanedString
}
