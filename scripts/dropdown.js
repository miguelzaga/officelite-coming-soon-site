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

  // Creates the input placeholder content
  const inputPlaceholder = document.createElement("div");
  inputPlaceholder.classList = "select__placeholder";

  const placeholder = document.createElement("p");
  placeholder.textContent = "Basic Pack";
  placeholder.classList.add("dropdown-placeholder");

  // Appends the placeholder and chevron (stored in assets.js)
  inputPlaceholder.appendChild(placeholder);
  // inputPlaceholder.appendChild(dropdownIcon());
  input.appendChild(inputPlaceholder);

  return input;
}

function showDropdown() {
  const structure = document.createElement("div");
  structure.classList.add("dropdown-structure", "hidden");

  const users = [
    { id: "basic", name: "Basic Pack", title: "Free" },
    { id: "pro", name: "Pro Pack", title: "$9.99" },
    { id: "ultimate", name: "Ultimate Pack", title: "$19.99" },
  ];

  users.forEach((user) => {
    const { id, name, title } = user;
    const option = document.createElement("div");
    option.addEventListener("click", () => selectOption(name));
    option.setAttribute("id", id);
    option.classList.add("dropdown-structure-input");

    const n = document.createElement("h5");
    n.textContent = name;

    const t = document.createElement("p");
    t.textContent = `${title}`;

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

function selectOption(name) {
  const text = document.querySelector(".dropdown-placeholder");
  text.textContent = name;
  text.classList.add("select__selected");
  toggleDropdown();
}
