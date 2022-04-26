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



// // Book Class: Represents a Book
// class Book {
//     constructor(title, author){
//         this.title = title;
//         this.author = author;
//     }
    
// }
// // UI Class: Handle the UI Tasks
// class UI {
//     static displayBooks() {
//         const StoredBooks = [
//             {
//                 title:  'Book One',
//                 author: 'Archibong Ebiti',
//             },
//             {
//                 title:  'Book Two',
//                 author: 'Ededet Eyamba',
//             }
//         ];

//         const books = StoredBooks;
//         books.forEach((book) => UI.addBookToList(book));
//     }

//     static addBookToList(book) {
//         const list = document.querySelector('#book-list');

//         const row = document.createElement('tr');

//         row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td><a href="#" class="delete">X</a></td>
//         `;

//         list.appendChild(row);
//     }

//     static deleteBook(el) {
//         if (el.classList.contains('delete')) {
//             el.parentElement.parentElement.remove();
//         }
//     }

//     static showAlert(message, className) {
//         const div = document.createElement('div');
//         div.className = `alert alert-${className}`;
//         div.appendChild(document.createTextNode(message));
//         const container = document.querySelector('.container');
//         const form = document.querySelector('#book-form');
//         container.insertBefore(div, form);

//         // Make Vanish in 3seconds
//         setTimeout(() => document.querySelector('.alert').remove(), 3000);
//     }

//     static clearFields() {
//         document.querySelector('#title').value = '';
//         document.querySelector('#author').value = '';
//     }
// }
// // Store Class: Handles Storage
// class Store {
//     static getBooks(){
//         let books;
//         if(localStorage.getItem('books') === null) {
//             books = [];
//         } else {
//             books = JSON.parse(localStorage.getItem('books'));
//         }

//         return books;
//     }

//     static addBook(book) {
//         const books = Store.getBooks();
//         books.push(book);
//         localStorage.setItem('books',JSON.stringify(books));
//     }

//     static removeBook(title) {
//         const books = Store.getBooks();

//         books.forEach((book, index) => {
//             if(book.title === title) {
//                 books.splice(index, 1);
//             }
//         });
        
//         localStorage.setItem('books', JSON.stringify(books));
//     }
// }

// // Event: Display Books
// document.addEventListener('DOMContentLoaded', UI.displayBooks);

// // Event: Add a Book
// document.querySelector('#book-form').addEventListener('submit', (e) =>{
    
//     // Prevent actual submit
//     e.preventDefault();

//     // Get form values
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;


//     // Validate
//     if(title === '' || author === '') {
//         UI.showAlert('Please fill in all fields');
//     } else {

//     // Instantiate book
//     const book = new Book(title, author);
    
//     // Add Book to UI
//     UI.addBookToList(book);

//     // Add Book to Store
//     Store.addBook(book);

//     // Show Success Message
//     UI.showAlert('Book Added')

//     // Clear fields
//     UI.clearFields();
//     }
// });
    
// // Event: Remove a Book
// document.querySelector('#book-list').addEventListener('click', (e) => {
//     // Remove Book from UI
//     UI.deleteBook(e.target)

//     // Remove Book from Store
//     Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

//      // Show Success Message
//      UI.showAlert('Book Removed')
// });
