import { useState } from 'react'

import AddBook from './redux-book/AddBook'
import BookList from './redux-book/BookList'
import Parentcomponent from './redux2/Parentcomponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Bookstore App</h1>
      {/* <AddBook/>
      <BookList /> */}
      <Parentcomponent/>
      
    </>
  )
}

export default App;
