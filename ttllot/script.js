// click filters and filter out data ---------------------
//miss janice tan's code 
// all filter
document.querySelector("#all").addEventListener("click", () => {
    // loop through the books loaded from the Airtable API
    const bookSpines = document.querySelectorAll(".book-spine");
    // hide the book detail data in case it clashes
    hideBook();
    // removes each book currently on the shelf
    bookSpines.forEach(book => {
      book.remove();
    });
    // clear the array to make way for new info
    books = [];
    base("books").select({
      view: "main"
    }).eachPage(gotPageOfBooks, gotAllBooks);
  });
  
  // fiction filter
  document.querySelector("#fiction-filter").addEventListener("click", () => {
    // loop through the books loaded from the Airtable API
    const bookSpines = document.querySelectorAll(".book-spine");
    hideBook();
    bookSpines.forEach(book => {
      book.remove();
    });
    books = [];
    base("books").select({
      view: "fiction"
    }).eachPage(gotPageOfBooks, gotAllBooks);
  });
  
  // non-fiction filter
  document.querySelector("#non-fiction-filter").addEventListener("click", () => {
    // loop through the books loaded from the Airtable API
    const bookSpines = document.querySelectorAll(".book-spine");
    hideBook();
    bookSpines.forEach(book => {
      book.remove();
    });
    books = [];
    base("books").select({
      view: "non-fiction"
    }).eachPage(gotPageOfBooks, gotAllBooks);
  });
  
  // comic filter
  document.querySelector("#comic-filter").addEventListener("click", () => {
    // loop through the books loaded from the Airtable API
    const bookSpines = document.querySelectorAll(".book-spine");
    hideBook();
    bookSpines.forEach(book => {
      book.remove();
    });
    books = [];
    base("books").select({
      view: "comic"
    }).eachPage(gotPageOfBooks, gotAllBooks);
  });
  
  // text only filter
  document.querySelector("#text-only-filter").addEventListener("click", () => {
    // loop through the books loaded from the Airtable API
    const bookSpines = document.querySelectorAll(".book-spine");
    hideBook();
    bookSpines.forEach(book => {
      book.remove();
    });
    books = [];
    base("books").select({
      view: "text only"
    }).eachPage(gotPageOfBooks, gotAllBooks);
  });