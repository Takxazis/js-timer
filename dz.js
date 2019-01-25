let sec = 0;

let Hstart = document.getElementById('HTMLstart').addEventListener("click", start);
let Hclear = document.getElementById('HTMLclear').addEventListener("click", clear);
let Hstop = document.getElementById('HTMLstop').addEventListener("click", stop);

function start() {
    timer = setInterval(function () {
        sec++;
        console.log(sec);
    }, 100)
};

function stop(){
    clearInterval(timer, 100);
}

function clear(){
    sec = 0;
}







