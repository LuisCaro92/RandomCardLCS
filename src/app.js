/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let icono = ["\u2666", "\u2665", "\u2660", "\u2663"];

function randomcard(numero, icono) {
  let icono1random = document.getElementById("icono1").innerHTML;
  let numerorandom = document.getElementById("number").innerHTML;
  let icono2random = document.getElementById("icono2").innerHTML;

  let numeroaleatorio = Math.floor(Math.random() * numero.length);
  let iconoaleatorio = Math.floor(Math.random() * icono.length);

  document.getElementById("icono1").innerHTML = icono[iconoaleatorio];
  document.getElementById("number").innerHTML = numero[numeroaleatorio];
  document.getElementById("icono2").innerHTML = icono[iconoaleatorio];

  if (iconoaleatorio == 0 || iconoaleatorio == 1) {
    document.getElementById("icono1").style.color = "red";
    document.getElementById("icono2").style.color = "red";
  }
}
window.onload = function() {
  let randomnumber = Math.random();
  randomcard(numero, icono);
};
