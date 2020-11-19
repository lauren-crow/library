//to-do
//get login working (superficially for a start - get login buttons working)
//delete functionality
// read toggle (prototype)
//hamburger menu after 450px

let accountNavBtns = document.querySelectorAll('.accountNav');
let logoinBtn = document.querySelector('#logoinBtn');
let logoutBtn = document.querySelector('#logoutBtn');

let form = document.querySelector('.form');
let titleInput = document.querySelector('#titleInput');
let authorInput = document.querySelector('#authorInput');
let pagesInput = document.querySelector('#pagesInput');
let readInput = document.querySelector('#readInput');
let addBookBtn = document.querySelector('#addBookBtn');
let submitBtn = document.querySelector('#submitBtn');

let bookList = document.querySelector('.bookList');
let bookTiles = document.querySelectorAll('.bookTile');
let tileRead = document.querySelector('.tileRead');
let deleteBtn = document.querySelectorAll('.deleteBtn');

let myLibrary = [];

//login---------------------------------------------------------------------------------------

let loggedIn = false;

const signIn = function(){
        loginBtn.addEventListener('click', () =>  {
                loginBtn.style.visibility = "hidden";
                signupBtn.style.visibility = "hidden";
                logoutBtn.style.visibility = "visible";
                loggedIn = true;
        });
        logoutBtn.addEventListener('click', () =>  {
            loginBtn.style.visibility = "visible";
            signupBtn.style.visibility = "visible";
            logoutBtn.style.visibility = "hidden";
            loggedIn = false;
        });
        return loggedIn;
}

loggedIn = signIn();

//-------------------------------------------------------------------------------------------- main functionality

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

/*function deleteBook() {
    bookTiles.forEach(tile => {
        tile.deleteBtn.addEventListener('click', () =>  {
            console.log('function fired');
            //myLibrary.pop();
        });
    });
//}*/


//book tiles -------------------------------------------------------------------------
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

    const deleteBtn = document.createElement('button');
    deleteBtn.className = ("deleteBtn");
    bookTile.appendChild(deleteBtn);
    deleteBtn.innerHTML = "<img class=\"deleteBtn\" src=\"https://img.icons8.com/material-sharp/24/000000/delete-sign.png\"/>";

    const tileRead = document.createElement('div');
    tileRead.className = ("tileRead");
    bookTile.appendChild(tileRead);
    tileRead.innerHTML = "read<br>" + myLibrary[myLibrary.length - 1].read;


    if(readInput.value == "yes"){
        bookTile.style.backgroundColor = "hsl(176, 71%, 37%, 20%)";
        tileRead.innerHTML = "read<br> <img src=\"https://img.icons8.com/ios/24/000000/checked-2--v2.png\"/>";
    }
    else{
        tileRead.innerHTML = "read<br> <img src=\"https://img.icons8.com/ios/24/000000/checked-2--v3.png\"/>";
    } 
}


//event listeners -------------------------------------------------------------------------------------------------
submitBtn.addEventListener('click', (book) =>  {
    addBookToLibrary(book) ;
    addBookBtn.style.visibility = "visible";
    form.style.visibility = "hidden";
    bookList.style.marginTop = "-6vh";
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.value = ''
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

