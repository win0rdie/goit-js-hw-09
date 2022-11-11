import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function handleClickBtn(e) {
  e.preventDefault();
  let delay = +e.currentTarget.delay.value;
  let step = +e.currentTarget.step.value;
  let amount = +e.currentTarget.amount.value;

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        });
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      });
    delay += step;
  }
}

btnEl.addEventListener('submit', handleClickBtn);
