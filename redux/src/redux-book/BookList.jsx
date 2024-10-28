import React from 'react';
import { useSelector } from 'react-redux';
 
function BookList() {
  const books = useSelector((state) => state.books); // Access books from Redux state
 
  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
 
export default BookList;