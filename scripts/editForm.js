import {storage} from "./storage.js";
import {createTable, formRef, tableRef} from "./createTable.js";

// Перезаписываем storage данными из формы
const submitEditForm = (event) => {
  event.preventDefault()
  // Находим нужный элемент по id и меняем его поля
  storage.find(item => {
      if (item.id === event.target[0].value) {
        item.name.firstName = event.target[1].value;
        item.name.lastName = event.target[2].value;
        item.about = event.target[3].value;
        item.eyeColor = event.target[4].value;
      }
    }
  )
  // Обновляем таблицу
  tableRef.innerHTML = ''
  createTable()
}

// Скрываем форму
const closeForm = () => {
  formRef.style.visibility = 'hidden';
}

// Вешаем события на кнопки
document.querySelector('form').addEventListener('submit', submitEditForm)
document.getElementById('close_form').addEventListener('click', closeForm)