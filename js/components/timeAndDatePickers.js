import "../vendor/picker.min.js";
import { showNotification } from './notification.js';

// ДАТЫ


// Выбор даты начала переговоров
const startDatepickerInput = document.querySelector('#start-datepicker');
const sDatepicker = new Picker(startDatepickerInput, {
  format: 'DD.MM.YYYY',
  controls: true,
  text: {
    title: 'Выберите дату начала переговоров',
    cancel: 'Закрыть',
    confirm: 'Принять',
    year: 'Год',
    month: 'Месяц',
    day: 'День',
  },
  headers: true,
});

// Выбор даты окончания переговоров
const endDatepickerInput = document.querySelector('#end-datepicker');
const eDatepicker = new Picker(endDatepickerInput, {
  format: 'DD.MM.YYYY',
  controls: true,
  text: {
    title: 'Выберите дату окончания переговоров',
    cancel: 'Закрыть',
    confirm: 'Принять',
    year: 'Год',
    month: 'Месяц',
    day: 'День',
  },
  headers: true,
});



// ВРЕМЯ

// Выбор времени начала переговоров
const startTimepickerInput = document.querySelector('#start-timepicker');
const sTimepicker = new Picker(startTimepickerInput, {
  format: 'HH:mm',
  controls: true,
  text: {
    title: 'Выберите время начала переговоров',
    cancel: 'Закрыть',
    confirm: 'Принять',
    hour: 'Часы',
    minute: 'Минуты',
  },
  headers: true,
});

// Выбор времени окончания переговоров
const endTimepickerInput = document.querySelector('#end-timepicker');
const eTimepicker = new Picker(endTimepickerInput, {
  format: 'HH:mm',
  controls: true,
  text: {
    title: 'Выберите время начала переговоров',
    cancel: 'Закрыть',
    confirm: 'Принять',
    hour: 'Часы',
    minute: 'Минуты',
  },
  headers: true,
});



// ФУНКЦИИ

export function resetDateAndTimePickers() { 
  sDatepicker.reset();
  sTimepicker.reset();

  eDatepicker.reset();
  eTimepicker.reset();
};

export function validateDateAndTimePickers() {
  const startDate = sDatepicker.element.value;
  const startTime = sTimepicker.element.value;

  const endDate = eDatepicker.element.value;
  const endTime = eTimepicker.element.value;

  return validateDateAndTime(startTime, startDate, endTime, endDate);
}

function validateDateAndTime(startTime, startDate, endTime, endDate) {
  if (!!(startTime && endTime && startDate && endDate)) {
    const fullStartDate = `${startTime} ${startDate}`;
    const fullEndDate = `${endTime} ${endDate}`;

    const sTimestamp = Date.parse(fullStartDate);
    const eTimestamp = Date.parse(fullEndDate);

    if (sTimestamp < eTimestamp) return { fullStartDate, fullEndDate };
    else {
      showNotification('time');
      return false;
    }
  }
  
  return showNotification('fail');;
}