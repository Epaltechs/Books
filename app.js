const title = document.getElementById('title');
const authors = document.getElementById('authors');
const libraryForm = document.getElementById('libraryForm');
const allbooks = document.getElementById('library');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = new Date().getTime().toString().concat(performance.now());
  }
}

const mybooks = JSON.parse(localStorage.getItem('bookArchive')) || [];

function displayBook(title, author, id) {
  const templateHTML = `
    ${title}<br>
    ${author}<br>
    <button type='button' class="remove" id="${id}">Remove</button>
    <hr>`;

  allbooks.insertAdjacentHTML('beforeend', templateHTML);
}

function getBooks() {
  const storage = JSON.parse(localStorage.getItem('bookArchive'));
  storage.forEach((book) => {
    displayBook(book.title, book.author, book.id);
  });
}

function addBook() {
  libraryForm.addEventListener('submit', () => {
    const inputBook = new Book(title.value, authors.value);
    mybooks.push(inputBook);
    title.value = '';
    authors.value = '';
    title.focus();
    authors.focus();
    localStorage.setItem('bookArchive', JSON.stringify(mybooks));
    getBooks();
  });

  localStorage.setItem('bookArchive', JSON.stringify(mybooks));
  getBooks();
}

addBook();

const removeAction = document.querySelectorAll('.remove');
removeAction.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) {
      mybooks.splice(index, index + 1);
    } else {
      mybooks.splice(index, index);
    }

    allbooks.innerHTML = '';
    localStorage.setItem('bookArchive', JSON.stringify(mybooks));
    window.location.reload();
    localStorage.setItem('bookStorage', JSON.stringify(mybooks));
  });
});
