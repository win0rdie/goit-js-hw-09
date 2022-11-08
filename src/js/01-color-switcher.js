const bodyEl = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function disableBtn() {
  startBtn.disabled = true;
}

function enableBtn() {
  startBtn.disabled = false;
}

startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  disableBtn();
});

stopBtn.addEventListener('click', () => {
  enableBtn();
  clearInterval(interval);
});
