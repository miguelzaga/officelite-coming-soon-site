const printArea = document.querySelector("#dropdown");
dropdown();

function dropdown() {
  const component = document.createElement("div");

  const input = createInput();
  const dropdown = showDropdown();

  component.appendChild(input);
  component.appendChild(dropdown);
  printArea.appendChild(component);
}

function createInput() {
  // Creates the input outline
  const input = document.createElement("div");
  input.classList.add("select");
  input.classList.add("input");
  input.addEventListener("click", toggleDropdown);

  const inputPlaceholder = document.createElement("div");
  inputPlaceholder.classList = "dropdown-placeholder";

  const n = document.createElement("b");
  n.classList.add("dropdown-placeholder__name");
  n.textContent = "Basic Pack";

  const t = document.createElement("p");
  t.classList.add("dropdown-placeholder__price");
  t.textContent = "Free";

  // Appends the placeholder and chevron (stored in assets.js)
  inputPlaceholder.appendChild(n);
  inputPlaceholder.appendChild(t);
  // inputPlaceholder.appendChild(dropdownIcon());
  input.appendChild(inputPlaceholder);

  return input;
}

function showDropdown() {
  const structure = document.createElement("div");
  structure.classList.add("dropdown-structure", "hidden");

  const plans = [
    { id: "basic", name: "Basic Pack", price: "Free" },
    { id: "pro", name: "Pro Pack", price: "$9.99" },
    { id: "ultimate", name: "Ultimate Pack", price: "$19.99" },
  ];

  plans.forEach((plan) => {
    const { id, name, price } = plan;
    const option = document.createElement("div");
    option.addEventListener("click", () => selectOption(option, name, price));
    option.setAttribute("id", id);
    option.classList.add("dropdown-structure__input");

    const n = document.createElement("b");
    n.classList.add("dropdown-structure__name");
    n.textContent = name;

    const t = document.createElement("p");
    t.classList.add("dropdown-structure__price");
    t.textContent = `${price}`;

    option.appendChild(n);
    option.appendChild(t);
    structure.appendChild(option);
  });
  return structure;
}

function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown-structure");
  dropdown.classList.toggle("hidden");

  const input = document.querySelector(".select");
  input.classList.toggle("select__active");
}

function selectOption(option, name, price) {
  let htmlElements = form.getElementsByClassName("dropdown-structure__input");
  for (let i = 0; i < htmlElements.length; i++) {
    htmlElements[i].classList.remove("dropdown-structure__input--selected");
  }
  option.classList.add("dropdown-structure__input--selected");
  const n = document.querySelector(".dropdown-placeholder__name");
  const p = document.querySelector(".dropdown-placeholder__price");
  n.textContent = name;
  p.textContent = price;
  toggleDropdown();
}
