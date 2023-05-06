const commentTextarea = document.querySelector('#comment-textarea');

export function validateTextarea() {
  return commentTextarea && commentTextarea.value ? commentTextarea.value : false; 
}

export function resetTextarea() {
  if (commentTextarea) commentTextarea.value = '';
}