let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", function validate(event) {
  event.preventDefault();

  var isNameEmpty = nameInput.value.length == 0;
  var isEmailInvalid = !emailInput.value.match(emailRegex);

  if (isNameEmpty) {
    nameInput.classList.add("input--error");
  }

  if (isEmailInvalid) {
    emailInput.classList.add("input--error");
  }

  if (!isNameEmpty && !isEmailInvalid) {
    window.open("https://www.frontendmentor.io/", "_blank");
  }
});

nameInput.addEventListener("focus", function removeError() {
  nameInput.classList.remove("input--error");
});

emailInput.addEventListener("focus", function removeError() {
  emailInput.classList.remove("input--error");
});
