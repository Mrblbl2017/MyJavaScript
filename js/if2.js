var nameUser = prompt('Кто Вы?', '');
if (nameUser == 0) {
  alert('Вход отменен');
} else if (nameUser == 'admin') {
  var password = prompt('Пожалуйста, введите пароль', '');
  if (password == 0) {
   alert('Вход отменен'); 
  } else if 
    (password == 'Черный Властелин') {
      alert('Добро пожаловать');
    } else {
      alert('Пароль неправильный');
    }
} else {
  alert('Я вас не знаю');
}