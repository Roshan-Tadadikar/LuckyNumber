//const date = document.getElementById("birthdate").value;
var cont = document.getElementById("hidden");
var btn = document.querySelector("#btn");
const number = document.querySelector("#number");

// btn.addEventListener("click", myfn());

function myfn() {
  var x = document.getElementById("birthdate").value;
  if (lucky(x) === true) {
    document.getElementById("hidden").innerHTML =
      "Hooray !! " + number.value + " is a Lucky :D ";
  } else {
    document.getElementById("hidden").innerHTML =
      number.value + " is not Lucky :(";
  }
}

function lucky(string) {
  var str = string.replaceAll("-", "");
  var len = str.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = sum + parseInt(str.charAt(i));
  }

  if (sum % number.value === 0) {
    return true;
  }
  return false;
}
