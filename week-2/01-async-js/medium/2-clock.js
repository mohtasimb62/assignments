const fs = require("fs")

function showTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    console.log(`${hours} : ${minutes} : ${seconds}`)
}

function showTimeAMPM() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let ampm;
    if (hours >= 12) {
        ampm = "PM";
        hours = hours % 12;
    } else {
        ampm = "AM";
    }

    console.log(`${hours} : ${minutes} : ${seconds} ${ampm}`)
}

setInterval(function() {
    console.clear();
    showTime();
    showTimeAMPM();
}, 5000);