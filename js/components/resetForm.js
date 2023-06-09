import { resetDateAndTimePickers } from './timeAndDatePickers.js';
import { resetSelects } from './allSelects.js';
import { resetTextarea } from './commentTextarea.js';
import { showNotification } from './notification.js';

const resetFormBtn = document.querySelector('#reset-form-btn');

export function resetForm() {
  resetDateAndTimePickers();
  resetSelects();
  resetTextarea();

  showNotification('reset');
};

if (resetFormBtn) {
  resetFormBtn.addEventListener('click', resetForm);
}
