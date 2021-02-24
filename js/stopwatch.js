const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');
const splitBtn = document.querySelector('#splitBtn');
const stopwatchTxt = document.querySelector('#stopwatchId');
const container = document.querySelector('.container');
const splitGrid = document.querySelector('.split-grid');
const table = document.querySelector('#tableBody2');


let startWatch;
let hour = 0;
let min = 0;
let sec = 0;
let startFlag = false;
let containerHeight = 850;
let splitHeight = 100;
let clickCount = 0;
table.innerHTML = '';

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
    if (startFlag === true) {
        clearInterval(startWatch);
        startFlag = false;
        stopwatchTxt.value = '00:00:00';
        sec = 0;
        min = 0;
        hour = 0;
        startFlag = false;
    }
})

splitBtn.addEventListener('click', () => {
    if (startFlag === true) {
        clickCount += 1;
        const timerVal = stopwatchTxt.value;
        table.innerHTML += "<tr><td><input style='width:580px; height:30px; text-align: center; font-size: 20px;' disabled  value='" + clickCount + ". " + timerVal +"' /></td></tr>";
        splitGrid.style.display = 'block';
        containerHeight += 50;
        splitHeight += 30;
        splitGrid.style.height = `${splitHeight.toString()}px`;
        console.log(containerHeight);
        container.style.height = `${containerHeight.toString()}px`;
    }
});