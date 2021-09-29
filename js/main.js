/* ====================================================
   Variables
   ==================================================== */
const secondsEl = document.querySelector("#seconds");
const minutesEl = document.querySelector("#minutes");
const hoursEl = document.querySelector("#hours");
const daysEl = document.querySelector("#days");
// The time in 14 days in milliseconds
const countdownEnd = new Date(Date.now() + 12096e5).getTime();

/* ====================================================
Functions
==================================================== */

/**
 * Render the seconds into HTML
 * @param      {String}  seconds  The number of seconds
 */
function renderSeconds(seconds) {
  secondsEl.innerHTML = `
    <div class="card-wrapper" >
      <div class="card-background upper">
        <span class="text" data-time="seconds">${seconds
          .toString()
          .padStart(2, "0")}</span>
      </div>
      <div class="card-background lower">
        <span class="text" data-time="seconds">${seconds
          .toString()
          .padStart(2, "0")}</span>
      </div>
      <div class="flip-wrapper" style="--delay: 100ms">
        <div class="flip-card front">
          <span class="text" data-time="seconds">${seconds
            .toString()
            .padStart(2, "0")}</span>
        </div>
        <div class="flip-card back">
          <span class="text" data-time="seconds">${seconds
            .toString()
            .padStart(2, "0")}</span>
        </div>
      </div>
    </div>
    <p class="period">Seconds</p>
  </div>
  `;
}

/**
 * Render the hours into HTML
 * @param      {String}  hours    The number of hours
 */
function renderMinutes(minutes) {
  minutesEl.innerHTML = `
    <div class="card-wrapper" >
      <div class="card-background upper">
        <span class="text" data-time="minutes">${minutes
          .toString()
          .padStart(2, "0")}</span>
      </div>
      <div class="card-background lower">
        <span class="text" data-time="minutes">${minutes
          .toString()
          .padStart(2, "0")}</span>
      </div>
      <div class="flip-wrapper" style="--delay: 59100ms">
        <div class="flip-card front">
          <span class="text" data-time="minutes">${minutes
            .toString()
            .padStart(2, "0")}</span>
        </div>
        <div class="flip-card back">
          <span class="text" data-time="minutes">${minutes
            .toString()
            .padStart(2, "0")}</span>
        </div>
      </div>
    </div>
    <p class="period">Minutes</p>
  </div>
  `;
}

/**
 * Render the hours into HTML
 * @param      {String}  hours    The number of hours
 */
function renderHours(hours) {
  hoursEl.innerHTML = `
    <div class="card-wrapper" >
      <div class="card-background upper">
        <span class="text" data-time="hours">${hours.toString().padStart(2, "0")}</span>
      </div>
      <div class="card-background lower">
        <span class="text" data-time="hours">${hours.toString().padStart(2, "0")}</span>
      </div>
      <div class="flip-wrapper" style="--delay: 3599100ms">
        <div class="flip-card front">
          <span class="text" data-time="hours">${hours.toString().padStart(2, "0")}</span>
        </div>
        <div class="flip-card back">
          <span class="text" data-time="hours">${hours.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
    <p class="period">Hours</p>
  </div>
  `;
}

/**
 * Render the days into HTML
 * @param      {String}  hours    The number of hours
 */
function renderDays(days) {
  daysEl.innerHTML = `
    <div class="card-wrapper" >
      <div class="card-background upper">
        <span class="text" data-time="days">${days.toString().padStart(2, "0")}</span>
      </div>
      <div class="card-background lower">
        <span class="text" data-time="days">${days.toString().padStart(2, "0")}</span>
      </div>
      <div class="flip-wrapper" style="--delay: 86399100ms">
        <div class="flip-card front">
          <span class="text" data-time="days">${days.toString().padStart(2, "0")}</span>
        </div>
        <div class="flip-card back">
          <span class="text" data-time="days">${days.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
    <p class="period">Days</p>
  </div>
  `;
}

/**
 * Convert milliseconds to human readable time
 * @param      {number}  milliseconds  The number of milliseconds
 */
function convertSeconds(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000) % 60;
  renderSeconds(seconds);
}

/**
 * Convert milliseconds to human readable time
 * @param      {number}  milliseconds  The number of milliseconds
 */
function convertMinutes(milliseconds) {
  const minutes = Math.floor(milliseconds / 1000 / 60) % 60;
  renderMinutes(minutes);
}

/**
 * Convert milliseconds to human readable time
 * @param      {number}  milliseconds  The number of milliseconds
 */
function convertHours(milliseconds) {
  const hours = Math.floor(milliseconds / 1000 / 60 / 60) % 24;
  renderHours(hours);
}

/**
 * Convert milliseconds to human readable time
 * @param      {number}  milliseconds  The number of milliseconds
 */
function convertDays(milliseconds) {
  const days = Math.floor(milliseconds / 1000 / 60 / 60 / 24);
  renderDays(days);
}

/* ====================================================
   Inits and Event Listeners
   ==================================================== */
/**
 * Calculate the time difference every second
 */
function setSeconds() {
  const now = new Date().getTime();
  const timeDifference = countdownEnd - now;
  convertSeconds(timeDifference);
}
setSeconds();
setInterval(setSeconds, 1000);

/**
 * Calculate the time difference every minute
 */
function setMinutes() {
  const now = new Date().getTime();
  const timeDifference = countdownEnd - now;
  convertMinutes(timeDifference);
}
setMinutes();
setInterval(setMinutes, 60000);

/**
 * Calculate the time difference every hour
 */
function setHours() {
  const now = new Date().getTime();
  const timeDifference = countdownEnd - now;
  convertHours(timeDifference);
}
setHours();
setInterval(setHours, 3600000);

/**
 * Calculate the time difference every day
 */
function setDays() {
  const now = new Date().getTime();
  const timeDifference = countdownEnd - now;
  convertDays(timeDifference);
}
setDays();
setInterval(setDays, 86400000);
