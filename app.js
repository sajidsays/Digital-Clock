const hours = document.getElementById("hoursElement");
const minutes = document.getElementById("minutesElement");
const seconds = document.getElementById("secondsElement");
const am_Pm = document.getElementById("amPm");

setInterval(function () {
    const date = new Date();
    let hours1 = date.getHours();
    let amPm = "AM";
    if(hours1 > 11){
        amPm = "PM";
    if(hours1 > 12){
        hours1 -= 12;
    }
    }
    hours.innerText = hours1;
    minutes.innerText = date.getMinutes();
    seconds.innerText = date.getSeconds();
    am_Pm.innerText = amPm;
},1000);