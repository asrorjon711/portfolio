const value = document.querySelector('#counter-value');
const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
let count = 0;

function renderCounter() {
  value.textContent = String(count);
  decrease.disabled = count === 0;
  reset.disabled = count === 0;
}

decrease.addEventListener('click', () => {
  if (count > 0) count -= 1;
  renderCounter();
});
increase.addEventListener('click', () => {
  count += 1;
  renderCounter();
});
reset.addEventListener('click', () => {
  count = 0;
  renderCounter();
});
renderCounter();