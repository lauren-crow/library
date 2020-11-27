let accountNavBtns = document.querySelectorAll('.accountNav');
let logoinBtn = document.querySelector('#logoinBtn');
let logoutBtn = document.querySelector('#logoutBtn');

let form = document.querySelector('.form');
let inputs = document.querySelectorAll('input');
let titleInput = document.querySelector('#titleInput');
let authorInput = document.querySelector('#authorInput');
let pagesInput = document.querySelector('#pagesInput');
let readInput = document.querySelector('#readInput');
let addBookBtn = document.querySelector('#addBookBtn');
let submitBtn = document.querySelector('#submitBtn');


let bookList = document.querySelector('.bookList');

//-------------------------------------------------------------------------------------------- main functionality

let myLibrary = [];

//constructor
function Book(title, author, pages, read) {
    this.title = titleInput.value;
    this.author = authorInput.value;
    this.pages = pagesInput.value + " pages";
    this.read = parseInt(readInput.value);
}

//add book to myLibrary array
function addBookToLibrary(book) {
    const newBook = new Book();
    myLibrary.push(newBook);
    displayBook();
    updateLocalStorage(myLibrary); 
    clearForm();
}

//local storage-------------------------------------------------------------------------------

//update local storage on user's machine
function updateLocalStorage(myLibrary) {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

//load stored local storage on page load
window.addEventListener("load", () => {
    if (localStorage.length !== 0) {
        JSON.parse(localStorage.getItem("library")).forEach((book) => {
            console.log(book);
            myLibrary.push(book);
        });
        displayBook();
    }
});

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

//book tiles -------------------------------------------------------------------------

function displayBook() { 
    let bookList = document.querySelector(".bookList");
    bookList.innerHTML = ''; 
    myLibrary.forEach(item => { 
        
        bookTile = document.createElement("div"); 
        bookTile.setAttribute("class", "bookTile"); 
        bookTile.setAttribute("id", myLibrary.indexOf(item)); 
        let tileRead = document.createElement("button"); 
        
        //set toggle initially
        function setToggleClass() { 
            if (item.read === 0) { 
                tileRead.innerHTML = "read<br> <img src=\"https://img.icons8.com/ios/24/000000/checked-2--v3.png\"/>";
            } else { 
                bookTile.style.backgroundColor = "hsl(176, 71%, 37%, 20%)";
                tileRead.innerHTML = "read<br> <img src=\"https://img.icons8.com/ios/24/000000/checked-2--v2.png\"/>";
            }
        }

        setToggleClass(); 

        bookTile.appendChild(tileRead); 
        tileRead.className = ("tileRead");

        //change toggle on click
        tileRead.addEventListener('click', () => {  
            if (item.read === 0) { 
                item.read = 1; 
                tileRead.parentNode.style.backgroundColor = "hsl(176, 71%, 37%, 20%)";
                tileRead.innerHTML = "read<br> <img src=\"https://img.icons8.com/ios/24/000000/checked-2--v2.png\"/>"; // put a check symbol in the toggle
                updateLocalStorage(myLibrary); 
            } else { 
                item.read = 0; 
                tileRead.parentNode.style.backgroundColor = "transparent";
                tileRead.innerHTML = "read<br> <img src=\"https://img.icons8.com/ios/24/000000/checked-2--v3.png\"/>"
                updateLocalStorage(myLibrary); 
            } 
        });

        //make title div on tile
        const tileTitle = document.createElement('div');
        tileTitle.className = ("tileTitle");
        bookTile.appendChild(tileTitle);
        tileTitle.innerHTML += Object.values(item).slice(0, 1);

        //make author div on tile
        const tileAuthor = document.createElement('div');
        tileAuthor.className = ("tileAuthor");
        bookTile.appendChild(tileAuthor);
        tileAuthor.innerHTML += "<br>by " + Object.values(item).slice(1, 2);

        //make pages div on tile
        const tilePages = document.createElement('div');
        tilePages.className = ("tilePages");
        bookTile.appendChild(tilePages);
        tilePages.innerHTML += "<br>" + Object.values(item).slice(2,3); + " pages <br><br>";

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "deleteBtn"); 
        deleteBtn.innerHTML = "<img class=\"deleteBtn\" src=\"https://img.icons8.com/material-sharp/24/000000/delete-sign.png\"/>";
        deleteBtn.setAttribute("id", myLibrary.indexOf(item)); 
        bookTile.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(item), 1); 
            displayBook();
            updateLocalStorage(myLibrary); 
        });
        
        bookList.appendChild(bookTile); 
    });
}



//event listeners -------------------------------------------------------------------------------------------------
//form: onsubmit

function clearForm(){
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.value = ''
}

submitBtn.addEventListener('click', (book) =>  {
    if (titleInput.value == "" || authorInput.value == "" || pagesInput.value == "") {          
        inputs.forEach(input => {
            if (input.value == ""){
                input.style.border = '2px solid rgb(255, 81, 0';
            }
            else{
                input.style.border = '1px solid gray';
            }
        });
    } 
    //if all inputs are complete, add book to library and clear form
    else{            
        addBookToLibrary(book) ;
        addBookBtn.style.visibility = "visible";
        form.style.visibility = "hidden";
        bookList.style.marginTop = "-6vh";
        clearForm();
    }

});

//styling to collapse form
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
        bookList.style.marginTop = "1vh";
    }
  }
  var x = window.matchMedia("(max-width: 1200px)")
      changeListMargin(x) 
      x.addListener(changeListMargin);

//to-do
//get login working properly && sign-up
//dropwdown white to tan + default read value

