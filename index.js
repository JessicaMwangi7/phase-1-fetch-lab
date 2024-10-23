function fetchBooks() {
  // Fetch data from the Game of Thrones API and return the fetch promise
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      // Call the renderBooks function to display the books
      renderBooks(data);
    })
    .catch(error => {
      console.error("Error fetching books:", error); // Log any errors that occur
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Use the book name to display the title
    main.appendChild(h2);
  });
}

// Event listener to call fetchBooks when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

