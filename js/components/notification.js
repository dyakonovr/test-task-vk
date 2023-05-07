const notification = document.querySelector('#notification');
const animationDuration = 3000; // в секундах

export function showNotification(status) {
  if (notification) {
    notification.classList.remove('notification--active');
    if (status === 'send') notification.innerHTML = 'Форма успешно отправлена!';
    if (status === 'fail') notification.innerHTML = 'Введены некорректные данные';
    if (status === 'reset') notification.innerHTML = 'Форма очищена';

    notification.classList.add('notification--active');
    setTimeout(function () { notification.classList.remove('notification--active') }, animationDuration);
  }
}
