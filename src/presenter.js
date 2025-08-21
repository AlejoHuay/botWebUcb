import saludar from "./saludoNom.js";

const first = document.querySelector("#nombre");
//const second = document.querySelector("#segundo-numero");
const formSaludoNom = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

formSaludoNom.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = first.value.trim();
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  //const secondNumber = Number.parseInt(second.value);

  if(horaActual<24 && horaActual >19){
    div.innerHTML = "<p> Buenas noches " + nombre + "</p>";
  }else if (horaActual<24 && horaActual >12){
    div.innerHTML = "<p> Buenas tardes " + nombre + "</p>";
  }else{
    div.innerHTML = "<p> Buenos dias " + nombre + "</p>";
  }

});
