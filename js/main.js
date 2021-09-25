/* ====================================================
   Variables
   ==================================================== */
const app = document.querySelector("#app");
// The time in 14 days in milliseconds
const countdownEnd = new Date(Date.now() + 12096e5).getTime();

/* ====================================================
Functions
==================================================== */

/**
 * Render the time into HTML
 * @param      {String}  days     The number of days
 * @param      {String}  hours    The number of hours
 * @param      {String}  minutes  The number of minutes
 * @param      {String}  seconds  The number of seconds
 */
function renderHTML(days, hours, minutes, seconds) {
  app.innerHTML = `
  <div>
    <div class="card-wrapper" style="--delay: 86399900ms">
      <div class="card-background upper">
        <span class="text">${days.toString().padStart(2, "0")}</span>
      </div>
      <div class="card-background lower">
        <span class="text">${days.toString().padStart(2, "0")}</span>
      </div>
      <div class="flip-wrapper">
        <div class="flip-card front">
          <span class="text">${days.toString().padStart(2, "0")}</span>
        </div>
        <div class="flip-card back">
          <span class="text">${days.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
    <p id="days" class="period">Days</p>
  </div>
  <div>
    <div class="card-wrapper" style="--delay: 3599900ms">
      <div class="card-background upper">
        <span class="text">${hours.toString().padStart(2, "0")}</span>
      </div>
      <div class="card-background lower">
        <span class="text">${hours.toString().padStart(2, "0")}</span>
      </div>
      <div class="flip-wrapper">
        <div class="flip-card front">
          <span class="text">${hours.toString().padStart(2, "0")}</span>
        </div>
        <div class="flip-card back">
          <span class="text">${hours.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
    <p id="hours" class="period">Hours</p>
  </div>
  <div>
    <div class="card-wrapper">
      <div class="card-background upper">
        <span class="text">${minutes.toString().padStart(2, "0")}</span>
      </div>
      <div class="card-background lower">
        <span class="text">${minutes.toString().padStart(2, "0")}</span>
      </div>
      <div class="flip-wrapper" style="--delay: 5900ms">
        <div class="flip-card front">
          <span class="text">${minutes.toString().padStart(2, "0")}</span>
        </div>
        <div class="flip-card back">
          <span class="text">${minutes.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
    <p id="minutes" class="period">Minutes</p>
  </div>
  <div>
    <div class="card-wrapper" >
      <div class="card-background upper">
        <span class="text">${seconds.toString().padStart(2, "0")}</span>
      </div>
      <div class="card-background lower">
        <span class="text">${seconds.toString().padStart(2, "0")}</span>
      </div>
      <div class="flip-wrapper" style="--delay: 100ms">
        <div class="flip-card front">
          <span class="text">${seconds.toString().padStart(2, "0")}</span>
        </div>
        <div class="flip-card back">
          <span class="text">${seconds.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
    <p id="seconds" class="period">Seconds</p>
  </div>`;
}

/**
 * Convert milliseconds to human readable time
 * @param      {number}  milliseconds  The number of milliseconds
 */
function convertMS(milliseconds) {
  const days = Math.floor(milliseconds / 1000 / 60 / 60 / 24);
  const hours = Math.floor(milliseconds / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(milliseconds / 1000 / 60) % 60;
  const seconds = Math.floor(milliseconds / 1000) % 60;
  renderHTML(days, hours, minutes, seconds);
}

/* ====================================================
   Inits and Event Listeners
   ==================================================== */
/**
 * Calculate the time difference every second
 */
setInterval(() => {
  const now = new Date().getTime();
  const timeDifference = countdownEnd - now;
  convertMS(timeDifference);
}, 1000);
