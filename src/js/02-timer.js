import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('button');
const daysEl = document.querySelector('[data-days');
const hoursEl = document.querySelector('[data-hours');
const minutesEl = document.querySelector('[data-minutes');
const secondsEl = document.querySelector('[data-seconds');

btnEl.setAttribute('disabled', true);
let selectDate;

let inputDate = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // createDifferenceTime(selectedDates);
    selectDate = selectedDates[0];
    const dateCurrent = new Date();
    let differenceTime = selectDate.getTime() - dateCurrent.getTime();
    differenceTime < 0
      ? Notify.warning('Please choose a date in the future')
      : btnEl.removeAttribute('disabled');
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function handleBtnClick() {
  if (!btnEl.hasAttribute('disabled')) btnEl.setAttribute('disabled', true);
  let intervalId = setInterval(() => {
    const dateCurrent = new Date();
    let differenceTime = selectDate.getTime() - dateCurrent.getTime();

    const { days, hours, minutes, seconds } = convertMs(differenceTime);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    if (differenceTime < 1000) clearInterval(intervalId);
  }, 1000);
}

inputEl.addEventListener('input', inputDate);
btnEl.addEventListener('click', handleBtnClick);
