const message = document.querySelector('#message');
const count = document.querySelector('#count');
message.addEventListener('input', () => {
  count.value = String(message.value.length);
});