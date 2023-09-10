// Select the HTML elements with specific data-testid attributes
const currentDayOfTheWeekElm = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElm = document.querySelector(
  '[data-testid="currentUTCTime"]'
);
const myTrackElm = document.querySelector(
  '[data-testid="myTrack"]'
);

//Set the innerHTML of the track element to display my track
myTrackElm.innerHTML = 'Frontend'

// Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
const currentDay = new Date().getDay();

// Define an array of day names
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// corresponding to the current day
const currentDayOfTheWeek = days[currentDay];

// Set the innerHTML of the currentDayofWeek element to display the current day of the week
currentDayOfTheWeekElm.innerHTML = currentDayOfTheWeek;

// function to update the current UTC time
function updateCurrentUTCTime() {
  // Create a new Date object to get the current UTC time
  const currentUTCTime = new Date().getTime();

  // Set the innerHTML of an element to display the current UTC time
  currentUTCTimeElm.innerHTML = currentUTCTime;
}

//calling function to updtate the current UTC time
updateCurrentUTCTime();

// Update the time every second (1 milliseconds)
setInterval(updateCurrentUTCTime, 1);
