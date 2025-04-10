const readline = require('readline');
const { clearScreenDown } = require('readline');

function displayClock() {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.log(timeString);
}

setInterval(displayClock, 1000);
