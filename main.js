"use strict";
var table = document.createElement('binary-table');

function showTime() {
    let time = new Date();
    var hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    for (let i = 0;i<parseToBinary(time.getHours()).length;i++) {
        hours.innerHTML += `${parseToBinary(time.getHours())[i]}`
    }
    for (let i = 0;i<parseToBinary(time.getMinutes()).length;i++) {
        minutes.innerHTML += `${parseToBinary(time.getMinutes())[i]}`
    }
    for (let i = 0;i<parseToBinary(time.getSeconds()).length;i++) {
        seconds.innerHTML += `${parseToBinary(time.getSeconds())[i]}`
    }
}
function parseToBinary(value) {
    let bits = [];
    while (value > 0) {
        bits.push(value%2);
        value = Math.floor(value/2);
    }
    return bits.reverse();
}
setInterval(showTime, 1000);
showTime();