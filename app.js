    // Select the HTML elements with specific data-testid attributes
    const currentDayofWeekElm = document.querySelector('[data-testid="currentDayofWeek"]');
    const currentUTCTimeElm = document.querySelector('[data-testid="currentUTCTime"]');

    // Get the current day of the week and the current time in UTC

    // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
    const currentDay = new Date().getDay();

    // Define an array of day names
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // corresponding to the current day
    const currentDayofWeek = days[currentDay];

    // Set the innerHTML of the currentDayofWeek element to display the current day of the week
    currentDayofWeekElm.innerHTML = currentDayofWeek;

    // Get the current time in UTC as a timestamp (milliseconds since January 1, 1970)
    const currentUTCTime = new Date().getTime();

    // Set the innerHTML of the currentUTCTime element to display the current UTC time
    currentUTCTimeElm.innerHTML = currentUTCTime;
