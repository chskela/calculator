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
  if (result.length > 17) {
    return result.slice(0, 18);
  } else {
    return result;
  } 
}

for (let i=0; i<digitals.length; i++) {
  digitals[i].addEventListener('click', () => {
    if(out.textContent.length < 18){
      value += digitals[i].textContent;
      out.innerHTML = value;
    }
  })
}

const reset = () => {
  memory = +value;
  value = '';
  out.innerHTML = 0;
} 

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
  result = value = Math.pow(+value, 2);
  out.innerHTML = chekResult(result);
  console.log(chekResult(result).length)
});

square.addEventListener('click', () => {
  result = value = Math.sqrt(+value);
  out.innerHTML = chekResult(result);
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
  out.innerHTML = chekResult(result);
})
