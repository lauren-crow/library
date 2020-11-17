let titleInput = document.querySelector('#titleInput');
let authorInput = document.querySelector('#authorInput');
let pagesInput = document.querySelector('#pagesInput');
let readInput = document.querySelector('#readInput');
let bookButton = document.querySelector('#bookButton');
let bookList = document.querySelector('.bookList');

let myLibrary = [
    {
        title: "The Hobbit",
        author: "Tolkien",
        pages: "102",
        read: "yes"
      },
];

const printLibrary = function() {
    for (let i=0; i < myLibrary.length; i++){
        bookList.innerHTML += "Title: " + myLibrary[i].title + "<br>Author: "+ myLibrary[i].author + "<br>Pages: "+ myLibrary[i].pages + "<br><br>"; 
    }
}

const printNewBook = function(){
    bookList.innerHTML += "Title: " + myLibrary[myLibrary.length - 1].title + "<br>Author: "+ myLibrary[myLibrary.length - 1].author + "<br>Pages: "+ myLibrary[myLibrary.length - 1].pages + "<br><br>"; 
}

window.onload = () => printLibrary();

//constructor
function Book(title, author, pages, read) {
    this.title = titleInput.value
    this.author = authorInput.value
    this.pages = pagesInput.value
    this.read = readInput.value
}

function addBookToLibrary(book) {
    const newBook = new Book();
    myLibrary.push(newBook);
    printNewBook();
}

bookButton.addEventListener('click', (book) =>  {
    addBookToLibrary(book) ;
});

