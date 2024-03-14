var timer = document.querySelector(".timer");
var time = 0;
let btn = document.querySelector(".set-time-btn");
let time_inputs = document.querySelector(".set-time-inputs");
let warning = document.querySelector(".num-error");
let audio = new Audio("../sounds/melody.wav");
let timer_starts = 0;
let inputs_enable = 0;

setInterval(updateTimer, 1000);

btn.onclick = function setTime() {
    let minutes = document.querySelector(".set-time-input-mins").value;
    let seconds = document.querySelector(".set-time-input-secs").value;

    time_inputs.style.display = "flex";
    btn.innerHTML = "Set";
    if (isNaN(minutes) || isNaN(seconds)) {
        warning.innerHTML = "Please write only numbers"
        warning.style.display = "flex";
    }
    else if (Number(minutes) < 0 || Number(seconds) < 0) {
        warning.innerHTML = "Please write positive numbers"
        warning.style.display = "flex";
    }
    else {
        if (inputs_enable == 1) {
            warning.style.display = "none";
            time = Number(minutes)*60 + Number(seconds);
            timer_starts = 1
        }
    }
    inputs_enable = 1
}

function updateTimer() {
    if (timer_starts == 1) {
        if (time == 0) {
            timer.innerHTML = `00:00`;
            audio.play()
            return;
        }
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        timer.innerHTML = `${minutes}:${seconds}`;
        time--;
    }
}

