import {storage} from "./storage.js";
import {rowsInPage} from "./pagination.js";

// Получаем референсы основной таблицы и формы для редактирования
let tableRef = document.querySelector('table > tbody');
let formRef = document.getElementById('change');

const masTableCellId = ['firstName', 'lastName', 'about', 'eyeColor']

// Создание строки таблицы
const createTableRow = (id, ...args) => {
  let tableRow = document.createElement('tr');
  tableRow.id = id
  tableRow.addEventListener('click', () => createEditForm(tableRow.id))

  // Создаем ячейку строки и присваиваем каждой из них нужный id
  for (let i = 0; i < args.length; i++){
    createTableCell(tableRow, args[i], masTableCellId[i])
  }

  tableRef.append(tableRow)
}

// Создание ячейки таблицы
const createTableCell = (tableRow, data, id) => {
  let result = document.createElement('td');
  result.innerHTML = data
  result.id = id
  if (id === 'eyeColor') {
    result.style.background = data;
  }
  tableRow.append(result)
}

// Делаем форму видимой и заполняем input
const createEditForm = (id) => {
  let object = storage.find(item => item.id === id)
  formRef.style.visibility = 'visible';
  document.getElementById('input_id').value = object.id
  document.getElementById('input_firstName').value = object.name.firstName
  document.getElementById('input_lastName').value = object.name.lastName
  document.getElementById('input_about').value = object.about
  document.getElementById('input_eyeColor').value = object.eyeColor
}

// Создание таблицы с каждой новой страницей, с данными из storage
// По умолчанию первая страница и первых 10 строк
const createTable = (page = 1) => {
  for (let i = page * rowsInPage - rowsInPage; i < page * rowsInPage && i < storage.length; i++) {
    createTableRow(
      storage[i].id,
      storage[i].name.firstName,
      storage[i].name.lastName,
      storage[i].about,
      storage[i].eyeColor
    )
  }
}

export {createTable, tableRef, formRef};