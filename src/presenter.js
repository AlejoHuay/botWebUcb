import saludar from "./saludoNom.js";

const first = document.querySelector("#nombre");
//const second = document.querySelector("#segundo-numero");
const formSaludoNom = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

formSaludoNom.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = first.value.trim();
  //const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
