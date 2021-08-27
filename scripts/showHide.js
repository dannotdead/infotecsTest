// Флаги, которые определяют скрыта колонка или нет
let hideFlags = {
  firstName: false,
  lastName: false,
  about: false,
  eyeColor: false,
}

// Определяет скрывать или показывать колонку
const hideColumnCondition = (column, key) => {
  if (hideFlags[key]) {
    column.forEach(item => item.style.visibility = 'visible')
    hideFlags[key] = false;
  } else {
    column.forEach(item => item.style.visibility = 'hidden')
    hideFlags[key] = true;
  }
}

// Скрывает колонку по переданному внутрь id ячейки
const hideColumn = (hideMethod) => {
  switch (hideMethod) {
    case 'hide_firstName':
      const firstNameColumn = document.querySelectorAll('#firstName');
      hideColumnCondition(firstNameColumn, hideMethod)
      break;
    case 'hide_lastName':
      const lastNameColumn = document.querySelectorAll('#lastName');
      hideColumnCondition(lastNameColumn, hideMethod)
      break;
    case 'hide_about':
      const aboutColumn = document.querySelectorAll('#about');
      hideColumnCondition(aboutColumn, hideMethod)
      break;
    case 'hide_eyeColor':
      const eyeColorColumn = document.querySelectorAll('#eyeColor');
      hideColumnCondition(eyeColorColumn, hideMethod)
      break;
  }
}

// Вешаем событие на каждую кнопку скрыть/показать
const sortButtons = document.querySelectorAll('button.thead-button-hide')
sortButtons.forEach(item =>
  document.getElementById(item.id).addEventListener('click', () => hideColumn(item.id))
)
