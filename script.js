// Select elements
const hoursInput = document.querySelector('.hours');
const minutesInput = document.querySelector('.minutes');
const secondsInput = document.querySelector('.seconds');
const startButton = document.querySelector('button');
const timerDisplay = document.getElementById('timer-txt');
const alarmSound = document.getElementById('alarm-sound');

let countdownInterval;

function startTimer() {
    // Clear any previous interval
    clearInterval(countdownInterval);

    // Parse inputs and handle invalid input
    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    // Convert total time to seconds
    let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    // Validate input
    if (totalTimeInSeconds <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    // Update the display immediately
    updateDisplay(totalTimeInSeconds);

    // Start countdown
    countdownInterval = setInterval(() => {
        totalTimeInSeconds--;

        if (totalTimeInSeconds < 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '00:00:00';
            alarmSound.play(); // Play the alarm sound
            alert('Time is up!');
            return;
        }

        updateDisplay(totalTimeInSeconds);
    }, 1000);
}

// Function to update the display
function updateDisplay(totalTimeInSeconds) {
    const hrs = Math.floor(totalTimeInSeconds / 3600);
    const mins = Math.floor((totalTimeInSeconds % 3600) / 60);
    const secs = totalTimeInSeconds % 60;

    timerDisplay.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Attach event listener to the button
startButton.addEventListener('click', startTimer);
