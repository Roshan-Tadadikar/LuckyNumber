const date = document.querySelector("#birthdate");
const number = document.querySelector("#number");
const cont = document.querySelector("#hidden");
const btn = document.querySelector("#btn");

const calsum = (values) => {
  let sum = 0;
  values = values.replaceAll("-", "");
  for (let digit of values) {
    sum = sum + Number(digit);
  }
  return sum;
};

const luckyNumber = (sumdate, numbercheck) => {
  if (sumdate % numbercheck === 0) {
    return Message(`Horray !!! ${numbercheck} is a lucky number!! 🥳 🥳 🥳 `);
  }
  Message(`Oops! ${numbercheck} is not that lucky 😕`);
};

const Message = (message) => {
  cont.innerText = message;
};

btn.addEventListener("click", () => {
  const newdate = date.value;
  const numbercheck = number.value;
  if (numbercheck <= 0) {
    Message("Please enter value greater than 0");
    return;
  }
  if (newdate && numbercheck) {
    const sumOfDate = calsum(newdate);
    luckyNumber(sumOfDate, numbercheck);
  } else {
    Message("Please enter both the fields");
  }
});
