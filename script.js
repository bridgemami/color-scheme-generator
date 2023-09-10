import  renderColors  from './color.js';

const formEl = document.getElementById('form');
const colorInput = document.getElementById('color');
const schemeInput = document.getElementById('color-scheme')
const schemeEl = document.getElementById('scheme');
const copyEl = document.getElementById("copy");

checkSchemeInput()

function checkSchemeInput(){
  switch(schemeInput.value){
    case 'triad':
      renderColors(colorInput.value.slice(1), schemeInput.value, 3);
    case 'quad':
      renderColors(colorInput.value.slice(1), schemeInput.value, 4);
    case '0':
      schemeEl.innerHTML = '<h2>Please select a scheme</h2>';
    default:
      renderColors(colorInput.value.slice(1), schemeInput.value);
  }
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    checkSchemeInput()
})



formEl.addEventListener('reset', () => {
  formEl.reset();
  schemeEl.innerHTML = ``
  copyEl.innerHTML = ``
}
)