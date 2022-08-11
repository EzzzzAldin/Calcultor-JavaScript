// Get Element
let sumBtn = document.querySelector("#sum");
let subBtn = document.querySelector("#sub");
let mulBtn = document.querySelector("#mul");
let divBtn = document.querySelector("#div");
let clearBtn = document.querySelector("#cl");
let equalBtn = document.querySelector("#eq");
let input = document.querySelector("#in");
// initial Values
let x = 0;
let y = 0;
let r = 1;
let z = 0;

sumBtn.onclick = () => {
  x += +input.value;
  input.value = null;
  z = 1;
  input.focus();
};

sub.onclick = () => {
  x = Math.abs(x - input.value);
  input.value = null;
  z = 2;
  input.focus();
};

mul.onclick = () => {
  r *= +input.value;
  input.value = null;
  z = 3;
  input.focus();
};

div.onclick = () => {
  if (r === 1) {
    r = input.value / r;
  } else {
    r /= +input.value;
  }
  input.value = null;
  z = 4;
  input.focus();
};

clearBtn.onclick = () => {
  input.value = null;
  if (z === 1 || z === 2) {
    x = 0;
  } else if (z === 3 || z === 4) {
    r = 1;
  }
  input.focus();
};

equalBtn.onclick = () => {
  y = +input.value;
  if (z === 1) {
    input.value = x + y;
  } else if (z === 2) {
    input.value = x - y;
  } else if (z === 3) {
    input.value = r * y;
  } else if (z === 4) {
    input.value = r / y;
  }
};
