"use strict";

const DisplayMessage = function (str) {
  document.querySelector(".message").textContent = str;
};

let pocetHorskychKol = Number(document.querySelector(".pocetHorske").value);
let pocetDetskychKol = Number(document.querySelector(".pocetDetske").value);
let pocetSilnicnichKol = Number(document.querySelector(".pocetSilnicni").value);
let pocetGravelKol = Number(document.querySelector(".pocetGravel").value);

console.log(pocetHorskychKol);
console.log(pocetDetskychKol);
console.log(pocetSilnicnichKol);
console.log(pocetGravelKol);

let pocetDnu = document.formular.pocetDnu.value;
console.log(pocetDnu);

let cyklonosic = document.querySelector('input[name="nosic"]:checked').value;

console.log(cyklonosic);

let cena =
  (500 * pocetHorskychKol +
    200 * pocetDetskychKol +
    1500 * pocetSilnicnichKol +
    2500 * pocetGravelKol) *
  pocetDnu *
  cyklonosic;
console.log(cena);

let rozpocet = Number(document.querySelector(".rozpocet").value);

console.log(rozpocet);

document.querySelector(".vypocet").addEventListener("click", function () {
  if (rozpocet >= cena) {
    DisplayMessage(
      `Tato zápůjčka vyhovuje Vašemu rozpočtu, bude stát ${cena},- Kč.`
    );
  } else {
    DisplayMessage(
      `Bohužel, tato zápůjčka je mimo Vaše možnosti. Stojí ${cena},- Kč.`
    );
  }
});

function kontrolaDat() {
  let zadanaHodnota = document.querySelector(".email").value; // načtena hodnota (value) z políčka s name=email
  if (zadanaHodnota.indexOf("@") == -1) {
    // zavináč se nevyskytuje
    alert("neni zavináč");
    return false;
  } else return true;
}
console.log(kontrolaDat(this));
