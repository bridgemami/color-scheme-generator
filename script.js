import { colorPicker } from './color.js';

const formEl = document.getElementById('form');
const colorInput = document.getElementById('color');
const schemeInput = document.getElementById('color-scheme')
const schemeEl = document.getElementById('scheme');
const copyEl = document.getElementById("copy");


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
  if(schemeInput.value === 'triad') {
    colorPicker(colorInput.value.slice(1), schemeInput.value, 3);
  }
  else if (schemeInput.value === 'quad') {
    colorPicker(colorInput.value.slice(1), schemeInput.value, 4);
  }
  else if (schemeInput.value === '0') {
      schemeEl.innerHTML = '<h2>Please select a scheme</h2>';
  }
  else {
    colorPicker(colorInput.value.slice(1), schemeInput.value);
  }
})

formEl.addEventListener('reset', () => {
  formEl.reset();
  schemeEl.innerHTML = ``
  copyEl.innerHTML = ``
}
)