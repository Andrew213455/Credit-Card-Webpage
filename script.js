"use strict";

const confirmButton = document.querySelector(".confirm-button");
const cardName = document.querySelector("#name");
const cardNumber = document.querySelector("#number");
const cardExpDate1 = document.querySelector("#exp-date1");
const cardExpDate2 = document.querySelector("#exp-date2");
const cardCVV = document.querySelector(".big-inp");
const newCardName = document.querySelector(".name");
const newCardNumber = document.querySelector(".card-number");
const newCardExpDate1 = document.querySelector(".exp1");
const newCardExpDate2 = document.querySelector(".exp2")
const newCardCVV = document.querySelector(".cvv");
const form = document.querySelector(".form");
const formComplete = document.querySelector(".completed-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = cardName.value;
  const numberInput = cardNumber.value;
  const cvvInput = cardCVV.value;
  const expDateInput1 = cardExpDate1.value;
  const expDateInput2 = cardExpDate2.value;
  newCardName.textContent = nameInput;
  newCardNumber.textContent = numberInput;
  newCardCVV.textContent = cvvInput;
  newCardExpDate1.textContent = expDateInput1;
  newCardExpDate2.textContent = expDateInput2
  form.style.display = "none";
  formComplete.style.display = "block";
});
