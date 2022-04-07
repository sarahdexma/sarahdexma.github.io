console.log("Hello bookshelf");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
// YOU WILL NEED TO REPLACE THIS API KEY AND BASE WITH YOUR UNIQUE INFO, FOUND IN AIRTABLE
var base = new Airtable({ apiKey: 'keywYod1DYUK31Or3' }).base(
    'appp0WO9z9UCaxQOr'
);


//get the "books" table from the base, select ALL the records
// specify the functions that will receive the data
base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);

// an empty array to hold our book data
const books = [];

// callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  // add the records from this page to our books array
  books.push(...records);
  // request more pages
  fetchNextPage();
}

// callback function that is used when all pages are loaded
function gotAllBooks(err) {
  console.log("gotAllBooks()");

  // report an error> this is what shows up if there's a problem
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogBooks();
  showBooks();
}

// just loop through the books and console.log them
function consoleLogBooks() {
  console.log("consoleLogBooks()");
  books.forEach((book) => {
    console.log("Book:", book);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showBooks() {
  console.log("showBooks()");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
//     try changing 'title' below to 'description' and your description will show instead of your title    
    h2.innerText = book.fields.title;
    document.body.appendChild(h2);
  });
}