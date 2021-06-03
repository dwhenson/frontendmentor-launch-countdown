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
		<div class="card-wrapper">
			<div class="flip-card top">${days.toString().padStart(2, "0")}</div>
			<div class="flip-card bottom">
				<p class="text">${days.toString().padStart(2, "0")}</p>
			</div>
		</div>
		<p id="days" class="period">Days</p>
	</div>
	<div>
		<div class="card-wrapper">
			<div class="flip-card top">${hours.toString().padStart(2, "0")}</div>
			<div class="flip-card bottom">
				<p class="text">${hours.toString().padStart(2, "0")}</p>
			</div>
		</div>
		<p id="hours" class="period">Hours</p>
	</div>
	<div>
		<div class="card-wrapper">
			<div class="flip-card top">${minutes.toString().padStart(2, "0")}</div>
			<div class="flip-card bottom">
				<p class="text">${minutes.toString().padStart(2, "0")}</p>
			</div>
		</div>
		<p id="minutes" class="period">Minutes</p>
	</div>
	<div>
		<div class="card-wrapper">
			<div class="flip-card top">${seconds.toString().padStart(2, "0")}</div>
			<div class="flip-card bottom">
				<p class="text">${seconds.toString().padStart(2, "0")}</p>
			</div>
		</div>
		<p id="seconds" class="period">Seconds</p>
	</div>
	`;
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
