import "../vendor/picker.min.js";

const datepickerInput = document.querySelector('#datepicker');
export const datepicker = new Picker(datepickerInput, {
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
