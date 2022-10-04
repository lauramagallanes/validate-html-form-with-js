/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let form = document.getElementById("formulario");
let mensajeDeFalta = document.querySelector(".alert");
mensajeDeFalta.style.display = "none";

function envioFormulario(event) {
  event.preventDefault();
  let card = document.getElementById("card").value;
  let cardElement = document.getElementById("cardContainer");
  if (card == "") {
    alert(`el campo card esta vacio`);
    mensajeDeFalta.style.display = "block";
    cardElement.className = "alert alert-danger";
  }

  let cvc = document.getElementById("cvc").value;
  let cvcContainer = document.getElementById("cvcContainer");
  if (cvc == "") {
    alert(`el campo cvc esta vacio`);
    mensajeDeFalta.style.display = "block";
    cvcContainer.className = "alert alert-danger";
  }

  let amount = document.getElementById("amount").value;
  let amountContainer = document.getElementById("amountContainer");
  if (amount == "") {
    alert(`el campo amount esta vacio`);
    mensajeDeFalta.style.display = "block";
    amountContainer.className = "alert alert-danger";
  }

  let nombre = document.getElementById("nombre").value;
  let nameContainer = document.getElementById("nameContainer");
  if (nombre == "") {
    alert(`el campo nombre esta vacio`);
    mensajeDeFalta.style.display = "block";
    nameContainer.className = "alert alert-danger";
  } else if (typeof nombre === "number") {
    alert("No se aceptan numeros");
  }

  let apellido = document.getElementById("apellido").value;
  let lastNameContainer = document.getElementById("lastNameContainer");
  if (apellido == "") {
    alert(`el campo apellido esta vacio`);
    mensajeDeFalta.style.display = "block";
    lastNameContainer.className = "alert alert-danger";
  }

  let city = document.getElementById("city").value;
  let cityContainer = document.getElementById("cityContainer");
  if (city == "") {
    alert(`el campo city esta vacio`);
    mensajeDeFalta.style.display = "block";
    cityContainer.className = "alert alert-danger";
  }

  let postalCode = document.getElementById("postalCode").value;
  let postalCodeContainer = document.getElementById("postalCodeContainer");

  if (postalCode == "") {
    alert(`el campo Postal Code esta vacio`);
    mensajeDeFalta.style.display = "block";
    postalCodeContainer.className = "alert alert-danger";
  }

  let mensaje = document.getElementById("mensaje").value;
  let messageContainer = document.getElementById("messageContainer");
  if (mensaje == "") {
    alert(`el campo Mensaje esta vacio`);
    mensajeDeFalta.style.display = "block";
    messageContainer.className = "alert alert-danger";
  }

  let elementoActivo = document.querySelector(
    'input[name="inlineRadioOptions"]:checked'
  );
  let optionsContainer = document.getElementById("optionsContainer");
  if (elementoActivo) {
    return true;
  } else {
    alert("No elegiste ninguna tarjeta");
    mensajeDeFalta.style.display = "block";
    optionsContainer.className = "alert alert-danger";
  }

  let select = document.getElementById("inputState");
  let stateContainer = document.getElementById("stateContainer");
  if (select.value == "Choose...") {
    alert("No elegiste ningun state");
    mensajeDeFalta.style.display = "block";
    stateContainer.className = "alert alert-danger";
  }

  //prueba de que funciona la funcion
  console.log("funciona");
}
form.addEventListener("submit", envioFormulario);
form.addEventListener("submit", function() {
  form.reset();
});
