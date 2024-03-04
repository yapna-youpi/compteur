//variables init
var sp, btn_start, btn_stop, t, ms, s, mn, h;

//function to reinitialise all variables
function reload() {
    sp = document.getElementsByTagName("span");
    btn_start = document.getElementsByClassName("btn_start");
    btn_stop = document.getElementsByClassName("btn_stop");
    t, ms=0 , s=0 , mn=0 , h=0;
    console.log("voici le sp: ",sp)
    console.log("voici le btn_start: ",btn_start)
    console.log("voici le btn stop: ",btn_stop)
}
window.onload = reload()

//initilisation of my stopwatch
function update_chrono() {
    ms+=1;
    if (ms == 10) {
        ms = 1;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1;
    }
    if (mn == 60) {
        mn = 0;
        h += 1;
    }
    //insertions of span values.
    sp[0].innerHTML = h + "h :";
    sp[1].innerHTML = mn + "mn :";
    sp[2].innerHTML = s + "s :";
    sp[3].innerHTML = ms + "ms";
}

function start() {
    t = setInterval(update_chrono , 100);
    btn_start.disabled = true;
    console.log(" start function");
}

//function to stop chrono
function stope(){
    clearInterval(t)
    btn_start.disabled = false;
    console.log("ferme le compteur")
    var string = 1;
    console.log(string)
}

//reinitialise stopwatch
function reset() {
    stope()
    window.location.reload()
}