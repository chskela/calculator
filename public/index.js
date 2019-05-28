const digitals = document.querySelectorAll('.digital');
const out = document.querySelector('.out');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const equal = document.querySelector('#equal');
const root = document.querySelector('#root');
const square =document.querySelector('#square');
const clear = document.querySelector('#clear');


let value = '';
let memory = 0;
let flag = 0;
let result = 0;

const chekResult = result => {
  result = '' + result;
  result = result.slice('.');
  if (result[0].length <= 17) return result[0]+result[1].toFixed()
}

for (let i=0; i<digitals.length; i++) {
  digitals[i].addEventListener('click', () => {
    if(out.textContent.length < 18){
      value += digitals[i].textContent;
      out.innerHTML = value;
    }
    
  })
}

plus.addEventListener('click', () => {
  memory = +value;
  value = '';
  out.innerHTML = 0;
  flag = 1;
});

minus.addEventListener('click', () => {
  memory = +value;
  value = '';
  out.innerHTML = 0;
  flag = 2;
});
multiplication.addEventListener('click', () => {
  memory = +value;
  value = '';
  out.innerHTML = 0;
  flag = 3;
});
division.addEventListener('click', () => {
  memory = +value;
  value = '';
  out.innerHTML = 0;
  flag = 4;
});
root.addEventListener('click', () => {
  out.innerHTML = value = Math.pow(+value, 2)
});
square.addEventListener('click', () => {
  out.innerHTML = value = Math.pow(+value, 0.5)
});
clear.addEventListener('click', () => {
  memory = 0;
  value = '';
  result = 0;
  out.innerHTML = 0;
})

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
  out.innerHTML = result;
  chekResult(result);
  
})
