//Book class
//constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = titleInput.value;
        this.author = authorInput.value;
        this.pages = pagesInput.value;
        this.read = readInput.value;
    }
}

//UI class: Handle UI taks
class UI {
    static displayBooks() {
        let myLibrary = [
            {
                title: 'To Kill A Mockingbird',
                author: 'Harper Lee',
                pages: '242',
                read: 'read'
            },
            {
                title: 'The Hobbit',
                author: 'JRR Tolkien',
                pages: '300',
                read: 'not'
            }
        ];
    const books = myLibrary;

    
    books.forEach((book) => UI.addBooktoLibrary(book));
    //replace books with myLibrary

    function addBookToLibrary(book) {
        let bookList = document.querySelector('.bookList');
        
        const newBook = new Book();
        myLibrary.push(newBook);
    }

    const bookTile = document.createElement('tr')
}

//Store Class: Handles Storage

//displayBooks

//deleteBookFromLibrary