let i = 0;
const tenSec = 5000;
const start = (number, counter) => setInterval(counter, number)
const counter = function () {
    i = i + 100;
    console.log(i);
    return i;
}
const intervalState = start(10, counter);
const clear = function (fun) {
    clearInterval(fun);
    i = 0;
}


let Hstart = document.getElementById('HTMLstart');
let Hclear = document.getElementById('HTMLclear');


Hstart.addEventListener('click', start);
Hclear.addEventListener('click', clear);