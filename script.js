function setClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();
    const hours = now.getHours() % 12; // 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = (hours * 30) + (0.5 * minutes); // 30 degrees per hour, 0.5 degrees per minute
    const minuteDegrees = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degrees per second
    const secondDegrees = seconds * 6; // 6 degrees per second

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setClock, 1000); // Update every second