function vysledek() {
  let pocetHorskychKol = Number(document.querySelector(".pocetHorske").value);
  let pocetDetskychKol = Number(document.querySelector(".pocetDetske").value);
  let pocetSilnicnichKol = Number(
    document.querySelector(".pocetSilnicni").value
  );
  let pocetGravelKol = Number(document.querySelector(".pocetGravel").value);
  console.log(pocetHorskychKol);
  console.log(pocetDetskychKol);
  console.log(pocetSilnicnichKol);
  console.log(pocetGravelKol);
  pocetDni = parseInt(document.form.pocetDnu.value);

  if (document.getElementById("radio1").checked) {
    nosic = document.getElementById("radio1").value;
  } else if (document.getElementById("radio2").checked) {
    nosic = document.getElementById("radio2").value;
  } else {
    nosic = document.getElementById("radio3").value;
  }

  cena = Number(
    (500 * pocetHorskychKol +
      200 * pocetDetskychKol +
      1500 * pocetSilnicnichKol +
      2500 * pocetGravelKol) *
      pocetDni *
      nosic
  );
  console.log(cena);
  let castka = Number(document.querySelector(".rozpocet").value);
  console.log(castka);
  if (castka >= cena) {
    document.querySelector(
      ".message"
    ).textContent = `Tato zápůjčka vyhovuje Vašemu rozpočtu, bude stát ${cena},- Kč.`;
  } else {
    document.querySelector(
      ".message"
    ).textContent = `Bohužel, tato zápůjčka je mimo Vaše možnosti. Stojí ${cena},- Kč.`;
  }
}

function emailCheck() {
  adresa = document.querySelector(".email").value;
  if (adresa.indexOf("@") < 1) {
    alert("Email má špatný formát");
  } else alert("Objednávka byla odeslána");
}
