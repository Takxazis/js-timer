let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;



const Hstart = document.getElementById('HTMLstart').addEventListener("click", start);
const Hclear = document.getElementById('HTMLclear').addEventListener("click", clear);
const Hstop = document.getElementById('HTMLstop').addEventListener("click", stop);

// T = text;

const hourT = document.getElementById('HTMLhour');
const minT = document.getElementById('HTMLmin');
const secT = document.getElementById('HTMLsec');
const msecT = document.getElementById('HTMLmsec');




function start() {
    timer = setInterval(function () {
        msec++;
        msecT.value = parseInt(msec) + 1;
        console.log('oh boy', msec);
        if (msec == 100) {
            sec++;
            msec = 0;
            secT.value = parseInt(sec) + 1;
        }
        if (sec == 10) {
            min++;
            sec = 0;
            minT.value = parseInt(min) + 1;
        }
        if (min == 5) {
            hour++;
            min = 0;
            hourT.value = parseInt(hour) + 1;
        }

    }, 1)
};

function stop() {
    clearInterval(timer, 1);
}

function clear() {
    msecT.value = 0;
    secT.value = 0;
    minT.value =0;
    hourT.value =0;
}




