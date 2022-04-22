console.log("Hello bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keywYod1DYUK31Or3'}).base('appp0WO9z9UCaxQOr');

//get ALL "books" from table from airtable database > COMMENT THIS LINE OUT
//base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);

base("books").select({
  view: "drama"
}).eachPage(gotPageOfBooks, gotAllBooks);

//empty array to hold our book data
const books = [];

//function that recieves our data
function gotPageOfBooks(records, fetchNextPage){
    console.log("gotPageOfBooks()");
    //add the records from this page to our books array
    books.push(...records);
    //request more pages
    fetchNextPage();
}

//call function 
function gotAllBooks(err) {
    console.log("gotAllBooks()");

    //report an error 
    if (err) {
        console.log("error loading books");
        console.error(err);
        return;
    }

    //call functions to log and show books 
    // consoleLogBooks();
    showBooks();
}

////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// create the book-spines on the shelf
function showBooks() {
  console.log("showBooks()");

  // find the shelf element
  const shelf = document.getElementById("shelf");

  // loop through the books loaded from the Airtable API
  books.forEach((book) => {
    // create the div, set its text and class
    const div = document.createElement("div");
    div.innerText = book.fields.title;
    div.classList.add("book-spine");
    // when the user clicks this book spine, call showBook and send the book data and this spine element
    div.addEventListener("click", () => {
      showBook(book, div);
    });
    // put the newly created book spine on the shelf
    shelf.appendChild(div);
  });
}

// show the detail info for a book, and highlight the active book-spine
function showBook(book, div) {
  console.log("showBook()", book);

  // find the book detail element
  const bookDetail = document.getElementById("book-detail");

  // populate the template with the data in the provided book
  bookDetail.getElementsByClassName("title")[0].innerText = book.fields.title; 
  bookDetail.getElementsByClassName("description")[0].innerText =
    book.fields.description;
  bookDetail.getElementsByClassName("cover-image")[0].src =
    book.fields.cover_image[0].url;

  // remove the .active class from any book spines that have it...
  const shelf = document.getElementById("shelf");
  const bookSpines = shelf.getElementsByClassName("active");
  for (const bookSpine of bookSpines) {
    bookSpine.classList.remove("active");
  }
  // ...and set it on the one just clicked
  div.classList.add("active");

  // reveal the detail element, we only really need this the first time
  // but its not hurting to do it more than once
  bookDetail.classList.remove("hidden");
}