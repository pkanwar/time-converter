const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');
const stopwatchTxt = document.querySelector('#stopwatchId');

let startWatch;
let hour = 0;
let min = 0;
let sec = 0;
let startFlag = false;
let stopFlag = false;

stopwatchTxt.value = '00:00:00';

startBtn.addEventListener('click', () => {
    if (startFlag === false) {
        startWatch = setInterval(() => {
            startFlag = true;
            sec += 1;
            if (sec > 59) {
                sec = 0;
                min += 1;
            }

            if (min > 59) {
                min = 0;
                hour += 1;
            }

            let watchTime = '';
            let minTime = '';
            let secTime = '';
            let hourTime = '';

            if (sec < 10) {
                secTime = `0${sec}`;
            } else {
                secTime = sec;
            }

            if (min < 10) {
                minTime = `0${min}`;
            } else {
                minTime = min;
            }

            if (hour < 10) {
                hourTime = `0${hour}`;
            } else {
                hourTime = hour;
            }

            watchTime = `${hourTime}:${minTime}:${secTime}`;
            console.log('watch time : ' + watchTime);
            stopwatchTxt.value = watchTime;
        }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(startWatch);
    startFlag = false;
});

resetBtn.addEventListener('click', () => {
    stopwatchTxt.value = '00:00:00';
    sec = 0;
    min = 0;
    hour = 0;
    startFlag = false;
})