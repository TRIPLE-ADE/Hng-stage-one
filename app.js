// Select the HTML elements with specific data-testid attributes
const currentDayOfTheWeekElm = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElm = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

// function to update the current UTC time
function updateCurrentUTCTime() {
  // Create a new Date object to get the current UTC time
  const currentUTCTime = new Date().getTime();

  // Set the innerHTML of an element to display the current UTC time
  currentUTCTimeElm.innerHTML = currentUTCTime;
}


// function to update the current UTC time
function updateCurrentDayofWeek() {
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
}

// function to call updateCurrentDayofWeek and updateCurrentUTCTime
function updateDayAndTime() {
    //calling function to update the current day of the week
    updateCurrentDayofWeek();

    //calling function to updtate the current UTC time
    updateCurrentUTCTime();
}

updateDayAndTime();
// Update the time every second (1000 milliseconds)
setInterval(updateDayAndTime, 1000);
