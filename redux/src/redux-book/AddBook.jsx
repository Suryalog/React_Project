import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
 
function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
 
  const addBook = () => {
    const newBook = { title, author };
    dispatch({ type: 'ADD_BOOK', payload: newBook });
    setTitle('');
    setAuthor('');
  };
 
  return (
    <div>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
}
 
export default AddBook;