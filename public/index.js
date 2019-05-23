const digitals = document.querySelectorAll('.digital');
const out = document.querySelector('.out');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplicationa');

const equal = document.querySelector('#equal');

let value = '';
let memory = 0;

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
});

equal.addEventListener('click', () => {
  out.innerHTML = memory + +value;
})
