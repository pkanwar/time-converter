const currentTime = document.querySelector('.current-time');
const yearInput = document.querySelector('#year');
const monthInput = document.querySelector('#month');
const dayInput = document.querySelector('#day');
const hourInput = document.querySelector('#hour');
const minuteInput = document.querySelector('#minute');
const secondInput = document.querySelector('#second');
const timestampInput = document.querySelector('#timestampInput');
const convertTimeStampButton = document.querySelector('#convertTimeStamp');
const convertHumanDateButton = document.querySelector('#convertHumanDate');
const clearBtn1 = document.querySelector('#clearBtn1');
const clearBtn2 = document.querySelector('#clearBtn2');
const timestampResult = document.querySelector('#timestampResult');
const epochDateResult = document.querySelector('#epochDateResult');

setInterval(() => {
    const currentDate = new Date();
    currentTime.innerHTML = Math.floor(currentDate.getTime() / 1000);
}, 1000);

function isHumanDateEmpty() {
    if (
        yearInput.value.length === 0 ||
        monthInput.value.length === 0 ||
        dayInput.value.length === 0 ||
        hourInput.value.length === 0 ||
        minuteInput.value.length === 0 ||
        secondInput.value.length === 0
    ) {
        return true;
    }
    return false;
}

convertHumanDateButton.addEventListener('click', () => {
    if (timestampInput.value.length === 0) {
        alert('please enter timestamp value');
    }
    const timeStampVal = parseFloat(timestampInput.value);
    const epochDate = new Date(timeStampVal * 1000);
    console.log('epoch  date : ' + epochDate);
    epochDateResult.value = epochDate;
});

convertTimeStampButton.addEventListener('click', () => {
    if (isHumanDateEmpty()) {
        alert('please fill year, month, day, hour, minute, second values');
    }

    const yearVal = parseFloat(yearInput.value);
    const monthVal = parseFloat(monthInput.value) - 1;
    const dayVal = parseFloat(dayInput.value);
    const hourVal = parseFloat(hourInput.value);
    const minuteVal = parseFloat(minuteInput.value);
    const secondVal = parseFloat(secondInput.value);
    const humanDate = new Date(yearVal, monthVal, dayVal, hourVal, minuteVal, secondVal);
    console.log('human date : ' + humanDate.getTime());
    timestampResult.value = humanDate / 1000;
});

clearBtn1.addEventListener('click', () => {
    yearInput.value = '';
    monthInput.value = '';
    dayInput.value = '';
    hourInput.value = '';
    minuteInput.value = '';
    secondInput.value = '';
    timestampResult.value = '';
});

clearBtn2.addEventListener('click', () => {
    timestampResult.value = '';
    epochDateResult.value = '';
    timestampInput.value = '';
});
