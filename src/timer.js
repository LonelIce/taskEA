/*
const dayTimer = document.getElementById('timerDays')
const hoursTimer = document.getElementById('timerHours')
const minutesTimer = document.getElementById('timerMinutes')
const secondsTimer = document.getElementById('timerSeconds')

document.addEventListener('DOMContentLoaded', function () {

    const deadline = new Date(2022, 12, 22);

    let timerId = null;

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = '' + (diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0);
        const hours = '' + (diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0);
        const minutes = '' + (diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0);
        const seconds = '' + (diff > 0 ? Math.floor(diff / 1000) % 60 : 0);

        dayTimer.innerText = days;
        hoursTimer.innerText = hours;
        minutesTimer.innerText = minutes;
        secondsTimer.innerText = seconds;
    }

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
});
*/
