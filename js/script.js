//add padding around all content
//'add' button brings up window with inputs - after submit, window collapses and button reappears
//should books be in list or be tiles (tile?)
//login?

let titleInput = document.querySelector('#titleInput');
let authorInput = document.querySelector('#authorInput');
let pagesInput = document.querySelector('#pagesInput');
let readInput = document.querySelector('#readInput');
let submitBrn = document.querySelector('#submitBtn');
let bookList = document.querySelector('.bookList');
let addBookBtn = document.querySelector('#addBookBtn');
let form = document.querySelector('.form');

let myLibrary = [
    /*{
        title: "The Hobbit",
        author: "Tolkien",
        pages: "102",
        read: "yes"
      },*/
];

const printNewBook = function(){
    const bookTile = document.createElement('div');
    bookTile.className = ("bookTile");
    bookList.appendChild(bookTile);

    const tileTitle = document.createElement('div');
    tileTitle.className = ("tileTitle");
    bookTile.appendChild(tileTitle);
    tileTitle.innerHTML = myLibrary[myLibrary.length - 1].title;

    const tileAuthor = document.createElement('div');
    tileAuthor.className = ("tileAuthor");
    bookTile.appendChild(tileAuthor);
    tileAuthor.innerHTML = "<br>by "+ myLibrary[myLibrary.length - 1].author;

    const tilePages = document.createElement('div');
    tilePages.className = ("tilePages");
    bookTile.appendChild(tilePages);
    tilePages.innerHTML = "<br>"+ myLibrary[myLibrary.length - 1].pages + " pages <br><br>";


    //bookTile.innerHTML = myLibrary[myLibrary.length - 1].title + "<br>by "+ myLibrary[myLibrary.length - 1].author + "<br>Pages: "+ myLibrary[myLibrary.length - 1].pages + "<br><br>"; 
}

const printLibrary = function() {
    for (let i=0; i < myLibrary.length; i++){
        bookList.bookTile.innerHTML = "Title: " + '<style class="tileTitle">' + myLibrary[i].title + "<br>Author: "+ myLibrary[i].author + "<br>Pages: "+ myLibrary[i].pages + "<br><br>"; 
    }
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

submitBtn.addEventListener('click', (book) =>  {
    addBookToLibrary(book) ;
    addBookBtn.style.visibility = "visible";
    form.style.visibility = "hidden";
    bookList.style.marginTop = "-6vh";
});


addBookBtn.addEventListener('click', () =>  {
    form.style.visibility = "visible";
    addBookBtn.style.visibility = "hidden";
    bookList.style.marginTop = "0vh";
    function changeListMargin(x) {
        if (x.matches) { // If media query matches
            bookList.style.marginTop = "23vh";
        } else {
            bookList.style.marginTop = "3vh";
        }
      }
      
      var x = window.matchMedia("(max-width: 1200px)")
      changeListMargin(x) 
});

if(form.style.visibility == "hidden"){
    alert('hidden');
    bookList.style.color = "red";
}


function changeListMargin(x) {
    if (x.matches && addBookBtn.style.visibility == "hidden") { // If media query matches
        bookList.style.marginTop = "23vh";
    } else {
        bookList.style.marginTop = "3vh";
    }
  }
  var x = window.matchMedia("(max-width: 1200px)")
      changeListMargin(x) 
      x.addListener(changeListMargin); 

