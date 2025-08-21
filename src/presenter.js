import saludar from "./saludoNomGeneroEdad.js";

const first = document.querySelector("#nombre");
const second = document.querySelector("#genero");
const third = document.querySelector("#edad");
const formSaludoNom = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

formSaludoNom.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = first.value.trim();
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  const genero = second.value.trim();
  const edad = Number.parseInt(third.value);

  if(horaActual<24 && horaActual >19){
    div.innerHTML = "<p> Buenas noches " + saludar(nombre,genero,edad) + "</p>";
  }else if (horaActual<24 && horaActual >12){
    div.innerHTML = "<p> Buenas tardes " + saludar(nombre,genero,edad) + "</p>";
  }else{
    div.innerHTML = "<p> Buenos dias " + saludar(nombre,genero,edad) + "</p>";
  }

});
