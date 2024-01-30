// Convert from
const selectFrom = document.querySelector("#select-from");

// Convert to
const selectTo = document.querySelector("#select-to");
const imgTo = document.querySelector("#img-to");
const moneyConvert = document.querySelector("#money-convert");

// Convert Box
const convertFrom = document.querySelector("#convert-value-from");
const convertText = document.querySelector("#convert-text");

// Input
const input = document.querySelector(".input-value");

// Button
const button = document.querySelector(".btn-convert");

// Functions
function changeConvert() {
  if (selectTo.value == "dolar") {
    imgTo.src = "../img/money/dolar.png";
    moneyConvert.textContent = "US$ 0,00";
    convertText.textContent = "Dólar Americano"
  } else if (selectTo.value == "euro") {
    imgTo.src = "../img/money/euro.png";
    moneyConvert.textContent = "€ 0,00";
    convertText.textContent = "Euro"
  } else if (selectTo.value == "libra") {
    imgTo.src = "../img/money/libra.png";
    moneyConvert.textContent = "£ 0,00";
    convertText.textContent = "Libra"
  } else if (selectTo.value == "bitcoin") {
    imgTo.src = "../img/money/bitcoin.png";
    moneyConvert.textContent = "₿ 0,00";
    convertText.textContent = "Bitcoin"
  }
}

function convertClick() {
  const convertValue = parseFloat(input.value);

  if (selectTo.value == "dolar") {
    const dolarConvert = convertValue / 5;
    moneyConvert.textContent = "US$ " + dolarConvert;
  } else if (selectTo.value == "euro") {
    const euroConvert = convertValue * 0.18;
    moneyConvert.textContent = "€ " + euroConvert;
  } else if (selectTo.value == "libra") {
    const libraConvert = convertValue * 0.15;
    moneyConvert.textContent = "£ " + libraConvert;
  } else if (selectTo.value == "bitcoin") {
    const bitcoinConvert = convertValue * 0.000002;
    moneyConvert.textContent = "₿ " + bitcoinConvert;
  }
}

function changeValues() {

  if (input.value == "") {
    convertFrom.textContent = "0,00";
  } else {
    convertFrom.textContent = input.value;
  }
}

// Events

input.addEventListener("input", changeValues);
button.addEventListener("click", convertClick);
selectTo.addEventListener("change", changeConvert);
