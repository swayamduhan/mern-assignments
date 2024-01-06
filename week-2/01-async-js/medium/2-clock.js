// we can simply also use .toLocaleTimeString method of Date Class
setInterval(()=>{
    const currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
    console.log(`${addZero(hours % 12)} : ${addZero(minutes)} : ${addZero(seconds)} ${hours>=12? "pm" : "am"}`)
}, 1000)

// adds a zero in front of single digit numbers
function addZero(value){
    return value < 10? `0${value}` : value
}