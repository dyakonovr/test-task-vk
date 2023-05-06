import "../vendor/picker.min.js";

const datepickerInput = document.querySelector('#datepicker');
const datepicker = new Picker(datepickerInput, {
  format: 'HH:mm DD/MM/YYYY',
  text: {
    title: 'Выберите дату и время',
    cancel: 'Закрыть',
    confirm: 'Принять',
    year: 'Год',
    month: 'Месяц',
    day: 'День',
    hour: 'Часы',
    minute: 'Минуты',
  },
  headers: true,
});

export function resetDatepicker() { 
  datepicker.reset();
};

export function validateDatepicker() {
  const date = datepicker.element.value;
  return date || false;
}