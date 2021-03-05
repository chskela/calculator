'use strict';

const out = document.querySelector('.out');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const equal = document.querySelector('#equal');
const root = document.querySelector('#root');
const square = document.querySelector('#square');
const clear = document.querySelector('#clear');
const dot = document.querySelector('#dot');
const backspace = document.querySelector('#backspace');
const keyboard = document.querySelector('#keyboard');

let value = '';
let memory = 0;
let flag = 0;
let result = 0;

const chekResult = (result) => result.toPrecision(12);

keyboard.addEventListener('click', (event) => {
  if (event.target.classList.contains('digital') === true) {
    if (out.textContent.length < 18) {
      value += event.target.textContent;
      out.textContent = value;
    }
  }
});

const reset = () => {
  memory = +value;
  value = '';
  out.textContent = '';
};

backspace.addEventListener('click', () => {
  out.innerHTML = value = out.textContent.slice(1, out.textContent.length);
});

dot.addEventListener('click', () => {
  console.log(dot.textContent);
  if (out.textContent.length < 18 && !~out.textContent.indexOf('.')) {
    value += dot.textContent;
    out.textContent = value;
  }
});

plus.addEventListener('click', () => {
  reset();
  flag = 1;
});

minus.addEventListener('click', () => {
  reset();
  flag = 2;
});

multiplication.addEventListener('click', () => {
  reset();
  flag = 3;
});

division.addEventListener('click', () => {
  reset();
  flag = 4;
});

root.addEventListener('click', () => {
  if (value !== '') {
    result = value = Math.pow(+value, 2);
    out.textContent = chekResult(result);
  }
});

square.addEventListener('click', () => {
  if (value !== '') {
    result = value = Math.sqrt(+value);
    out.textContent = chekResult(result);
  }
});

clear.addEventListener('click', () => {
  memory = 0;
  value = '';
  result = 0;
  out.textContent = '';
});

equal.addEventListener('click', () => {
  switch (flag) {
    case 1:
      result = memory + +value;
      break;
    case 2:
      result = memory - +value;
      break;
    case 3:
      result = memory * +value;
      break;
    case 4:
      result = memory / +value;
      break;
  }
  value = '';
  out.textContent = chekResult(result);
});
