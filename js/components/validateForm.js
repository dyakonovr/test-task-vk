import { validateSelects } from './allSelects.js';
import { validateDatepicker } from './datepicker.js';
import { resetForm } from './resetForm.js';
import { validateTextarea } from './commentTextarea.js';
import { showNotification } from './notification.js';

const sendFormBtn = document.querySelector('#send-form-btn');

if (sendFormBtn) {
  sendFormBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const selectsData = validateSelects();
    const date = validateDatepicker();
    const comment = validateTextarea();

    if (objectIsNotEmpty(selectsData) && date && comment) {
      const data = { ...selectsData, date, comment };
      sendData(data);
      resetForm();
      showNotification('send');
    }
    
    else showNotification('fail');
  });
}

function sendData(data) {
  console.log('data: ', JSON.stringify(data));
}

function objectIsNotEmpty(obj) {
  return !!Object.keys(obj).length;
}