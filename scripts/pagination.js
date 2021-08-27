import {storage} from "./storage.js";
import {createTable, tableRef} from "./createTable.js";


let paginationRef = document.getElementById('pagination')
const rowsInPage = 10;

const pagination = (pageNumber) => {
  // Очищаем таблицу и создаем заного со следующими 10 элементами
  tableRef.innerHTML = ''
  createTable(pageNumber)
}

// Создаем кнопки для пагинации
const pageCreate = () => {
  const pageCount = Math.ceil(storage.length / rowsInPage)
  for (let i = 0; i < pageCount; i++) {
    let pageNumber = document.createElement('button');
    pageNumber.innerHTML = i + 1;
    pageNumber.id = i + 1;
    pageNumber.addEventListener('click', () => pagination(i + 1))
    paginationRef.append(pageNumber)
  }
}

export {pageCreate, rowsInPage};