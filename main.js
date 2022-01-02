"use strict";
const digitalElement = document.querySelector(".digital");
const hElement = document.querySelector(".p_h");
const mElement = document.querySelector(".p_m");
const sElement = document.querySelector(".p_s");
const updateClock = () => {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    digitalElement.textContent = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;
    const hDeg = ((360 / 12) * hour) - 90;
    const mDeg = ((360 / 12) * minutes) - 90;
    const sDeg = ((360 / 60) * seconds) - 90;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    sElement.style.transform = `rotate(${sDeg}deg)`;
};
const fixZero = (time) => {
    return time < 10 ? `0${time}` : time;
};
setInterval(updateClock, 1000);
updateClock();
