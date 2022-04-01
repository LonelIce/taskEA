const dayTimer = document.getElementById('timerDays')
const hoursTimer = document.getElementById('timerHours')
const minutesTimer = document.getElementById('timerMinutes')
const secondsTimer = document.getElementById('timerSeconds')

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const MILLISECONDS_IN_SECONDS = 1000;
const HOURS_IN_DAY = 24;

document.addEventListener('DOMContentLoaded', function () {

    const deadline = new Date(2022, 12, 22);

    let timerId = null;

    function countdownTimer() {
        const diff = deadline - new Date();
        const isTimerActive = diff > 0;
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = '' + (isTimerActive ? Math.floor(diff / MILLISECONDS_IN_SECONDS / SECONDS_IN_MINUTE / MINUTES_IN_HOUR / HOURS_IN_DAY) : 0);
        const hours = '' + (isTimerActive ? Math.floor(diff / MILLISECONDS_IN_SECONDS / SECONDS_IN_MINUTE / MINUTES_IN_HOUR) % HOURS_IN_DAY : 0);
        const minutes = '' + (isTimerActive ? Math.floor(diff / MILLISECONDS_IN_SECONDS / SECONDS_IN_MINUTE) % MINUTES_IN_HOUR : 0);
        const seconds = '' + (isTimerActive ? Math.floor(diff / MILLISECONDS_IN_SECONDS) % SECONDS_IN_MINUTE : 0);

        dayTimer.innerText = days;
        hoursTimer.innerText = hours;
        minutesTimer.innerText = minutes;
        secondsTimer.innerText = seconds;
    }

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
});
