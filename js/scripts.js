// Button
const btnConvert = document.querySelector(".btn-convert");

// Input
const currencyInput = document.querySelector(".input-value");

// Selects
const selectTo = document.querySelector("#select-to");

// Converts
const convertFrom = document.querySelector("#money-convert-from");
const convertTo = document.querySelector("#money-convert-to");

const imageCurrency = document.querySelector("#img-to");
const textCurrency = document.querySelector("#convert-text");

// Functions
function convert() {
  const convertFromValue = currencyInput.value;

  convertFrom.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(convertFromValue);

  if (selectTo.value == "dolar") {
    const convertedDolarValue = convertFromValue / 5.2;
    convertTo.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(convertedDolarValue);
  }

  if (selectTo.value == "euro") {
    const convertedEuroValue = convertFromValue / 6.2;
    convertTo.textContent = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(convertedEuroValue);
  }

  if (selectTo.value == "libra") {
    const convertedLibraValue = convertFromValue * 0.16;
    convertTo.textContent = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(convertedLibraValue);
  }

  if (selectTo.value == "bitcoin") {
    const convertedBitcoinValue = convertFromValue * 0.0000046;
    convertTo.textContent = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(convertedBitcoinValue);
  }
}

function changeCurrency() {
  imageCurrency.src = `../img/money/${selectTo.value}.png`;

  if (selectTo.value == "dolar") {
    textCurrency.innerHTML = "Dólar Americano";
  }

  if (selectTo.value == "euro") {
    textCurrency.innerHTML = "Euro";
  }

  if (selectTo.value == "libra") {
    textCurrency.innerHTML = "Libra";
  }

  if (selectTo.value == "bitcoin") {
    textCurrency.innerHTML = "Bitcoin";
  }

  convert();
}

// Events
btnConvert.addEventListener("click", convert);
selectTo.addEventListener("change", changeCurrency);
