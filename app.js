/* eslint-disable*/
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

class Libraryshelf {
  constructor() {
    this.booksrecord = JSON.parse(localStorage.getItem('bookArchive')) || [];
  }

  static displayBook(title, author, id) {
    const templateHTML = `
      <tr> 
        <td class="table-item"><p>"${title}" by ${author}</p>
        <button type='button' class="remove" id="${id}">Remove</button>
        </td>
      </tr>
      `;

    allbooks.insertAdjacentHTML('beforeend', templateHTML);
  }

  static getBooks() {
    const storage = JSON.parse(localStorage.getItem('bookArchive'));
    storage.forEach((book) => {
      Libraryshelf.displayBook(book.title, book.author, book.id);
    });
  }

  remove(button, key) {
    button.addEventListener('click', () => {
      if (key === 0) {
        this.booksrecord.splice(key, key + 1);
      } else {
        this.booksrecord.splice(key, 1);
      }

      allbooks.innerHTML = '';
      localStorage.setItem('bookArchive', JSON.stringify(this.booksrecord));
      window.location.reload();
      localStorage.setItem('bookArchive', JSON.stringify(this.booksrecord));
    });
  }

  addBook() {
    libraryForm.addEventListener('submit', () => {
      const inputBook = new Book(title.value, authors.value);
      this.booksrecord.push(inputBook);
      localStorage.setItem('bookArchive', JSON.stringify(this.booksrecord));
      title.value = '';
      authors.value = '';
      title.focus();
      authors.focus();
      Libraryshelf.getBooks();
    });

    localStorage.setItem('bookArchive', JSON.stringify(this.booksrecord));
    Libraryshelf.getBooks();
  }
}

const keep = new Libraryshelf();
keep.addBook();

const removeAction = document.querySelectorAll('.remove');
removeAction.forEach((btn, index) => {
  keep.remove(btn, index);
});