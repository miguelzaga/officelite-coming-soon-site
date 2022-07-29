let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", function validate(event) {
  event.preventDefault();

  if (nameInput.value.length == 0) {
    nameInput.classList.add("input--error");
  }

  if (!emailInput.value.match(emailRegex)) {
    emailInput.classList.add("input--error");
  }
});

nameInput.addEventListener("focus", function removeError() {
  nameInput.classList.remove("input--error");
});

emailInput.addEventListener("focus", function removeError() {
  emailInput.classList.remove("input--error");
});
