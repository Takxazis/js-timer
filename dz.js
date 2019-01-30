//const element
const Hstart = document.getElementById('HTMLstart').addEventListener("click", start);
const Hclear = document.getElementById('HTMLclear').addEventListener("click", clear);
const Hstop = document.getElementById('HTMLstop').addEventListener("click", stop);

// const time
const hourT = document.getElementById('HTMLhour');
const minT = document.getElementById('HTMLmin');
const secT = document.getElementById('HTMLsec');
const msecT = document.getElementById('HTMLmsec');
const decimal = 10; // decemindal system
const milisecond = 1000; // ritgh wey
const minuteOrHour = 60 // 60  =) 

// constanst first 
// let variables
let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer = null; // need timer variable!!!








function start() {
    timer = setInterval(function () {
        msec++;
        msecT.value = parseInt(msec, decimal);
        console.log('oh boy', msec);
        if (msec === milisecond) {
            sec++;
            msec = 0;
            secT.value = parseInt(sec, decimal);
        }
        if (sec === minuteOrHour) {
            min++;
            sec = 0;
            minT.value = parseInt(min, decimal);
        }
        if (min === minuteOrHour) {
            hour++;
            min = 0;
            hourT.value = parseInt(hour, decimal);
        }

    }, 1)
};

function stop() {
    clearInterval(timer, 1);
}

function clear() {
    msecT.value = 0;
    secT.value = 0;
    minT.value = 0;
    hourT.value = 0;
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
}




