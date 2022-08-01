if (window.localStorage.getItem("releaseDate")) {
  console.log("There is alreade a release Date");
} else {
  console.log("There is no release Date");
  console.log("creating one...");
  let newReleaseDate = createReleaseDate();
  window.localStorage.setItem("releaseDate", newReleaseDate);
}

{
  let releaseDate = window.localStorage.getItem("releaseDate");
  let currentDate = new Date();

  let releaseMiliseconds = Date.parse(releaseDate);
  let currentMiliseconds = Date.parse(currentDate);

  let milisecondsLeft = releaseMiliseconds - currentMiliseconds;
  console.log(`release in ${Date.setTime(milisecondsLeft)}`);
}

function createReleaseDate() {
  var date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date;
}
