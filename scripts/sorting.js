import {storage} from "./storage.js";
import {createTable, tableRef} from "./createTable.js";

// Функция сортировки, сортирует по алфавиту каждое поле
const sortButton = (sortMethod) => {
  switch (sortMethod) {
    case 'sort_firstName':
      storage.sort((a, b) => a.name.firstName > b.name.firstName ? 1 : -1);
      break;
    case 'sort_lastName':
      storage.sort((a, b) => a.name.lastName > b.name.lastName ? 1 : -1);
      break
    case 'sort_about':
      storage.sort((a, b) => a.about > b.about ? 1 : -1);
      break;
    case 'sort_eyeColor':
      storage.sort((a, b) => a.eyeColor > b.eyeColor ? 1 : -1);
      break;
  }
  // Обновляем таблицу
  tableRef.innerHTML = ''
  createTable()
}

// Вешаем событие на каждую кнопку сортировки
const sortButtons = document.querySelectorAll('button.thead-button-sort')
sortButtons.forEach(item =>
  document.getElementById(item.id).addEventListener('click', () => sortButton(item.id))
)