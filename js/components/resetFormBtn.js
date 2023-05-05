import { datepicker } from './datepicker.js';
import { selectsArray } from './allSelects.js';

const resetFormBtn = document.querySelector('#reset-form-btn');

if (resetFormBtn) {
  resetFormBtn.addEventListener('click', function () {
    datepicker.reset();

    for (const select of selectsArray) {
      select.value = '';
    }
  });
}