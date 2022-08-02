var countdown = document.getElementById("countdown");

createReleaseDate();
renderReleaseDate();
setInterval(renderCountdown, 1000);

function createReleaseDate() {
  if (window.localStorage.getItem("releaseDate")) {
    console.log("There is already a release Date");
    console.log(window.localStorage.getItem("releaseDate"));
  } else {
    let date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000); // plus 30 days in miliseconds
    window.localStorage.setItem("releaseDate", date);
  }
}

function renderReleaseDate() {
  var releaseDateElement = document.getElementById("release-date");
  var releaseDate = new Date(window.localStorage.getItem("releaseDate"));
  console.log(releaseDate);
  var options = { day: "numeric", month: "long", year: "numeric" };
  console.log(releaseDateElement);
  releaseDateElement.innerHTML = releaseDate.toLocaleDateString(
    "en-GB",
    options
  );
}

function renderCountdown() {
  var countdownNumbers = countdown.getElementsByClassName("countdown__number");
  var parsedCountdown = calculateCountdown();

  console.log();

  parsedCountdown.forEach(function renderNumbers(number, i) {
    countdownNumbers[i].innerHTML = number;
  });
}

function calculateCountdown() {
  var releaseDate = new Date(window.localStorage.getItem("releaseDate"));
  var currentDate = new Date();
  var milisecondsLeft = releaseDate.getTime() - currentDate.getTime();

  var conversionRates = [24 * 60 * 60 * 1000, 60 * 60 * 1000, 60 * 1000, 1000]; // miliseconds in [days, hours, minutes, seconds]

  var parsedCountdown = conversionRates.map(function parseMiliseconds(rate) {
    var convertedValue = Math.floor(milisecondsLeft / rate);
    milisecondsLeft = milisecondsLeft % rate;
    return convertedValue;
  });

  // [daysLeft, hoursLeft, minutesLeft, secondsLeft] = parsedCountdown;
  return parsedCountdown;
}
