const fs = require("fs")

function showTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    console.log(`${hours} : ${minutes} : ${seconds}`)
}

function showTimeAMPM() {
    
}

setInterval(function() {
    console.clear();
    showTime();
}, 1000);