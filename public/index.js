const digitals = document.querySelectorAll('.digital');
const out = document.querySelector('.out');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');

const equal = document.querySelector('#equal');


let value = '';
let memory = 0;
let flag = 0;

for (let i=0; i<digitals.length; i++) {
    digitals[i].addEventListener('click', () => {
        console.log(digitals[i].textContent);
        if(out.textContent.length < 10){
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

equal.addEventListener('click', () => {
  console.log(flag);
  
  switch (flag) {
    case 1:
      out.innerHTML = memory + +value;
      break;
    case 2:
      out.innerHTML = memory - +value;
      break;
    case 3:
      out.innerHTML = memory * +value;
      break;
    case 4:
      out.innerHTML = memory / +value;
      break;

  }
  
})
