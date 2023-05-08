import { validateSelects } from './allSelects.js';
import { validateDateAndTimePickers } from './timeAndDatePickers.js';
import { resetForm } from './resetForm.js';
import { validateTextarea } from './commentTextarea.js';
import { showNotification } from './notification.js';

const sendFormBtn = document.querySelector('#send-form-btn');

if (sendFormBtn) {
  sendFormBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const selectsData = validateSelects();
    const dateAndTime = validateDateAndTimePickers();
    const comment = validateTextarea();

    if (objectIsNotEmpty(selectsData) && dateAndTime && comment && time) {
      const data = { ...selectsData, ...dateAndTime, comment };
      sendData(data);
      resetForm();
      showNotification('send');
    }
  });
}

function sendData(data) {
  console.log('data: ', JSON.stringify(data));
}

function objectIsNotEmpty(obj) {
  return !!Object.keys(obj).length;
}