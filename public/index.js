const keys = document.querySelectorAll('.key');
const out = document.querySelector('.input');


for (let i=0; i<keys.length; i++) {
    keys[i].addEventListener('click', () => {
        console.log(keys[i].textContent);
        
        out.innerHTML += keys[i].textContent;
    })
}