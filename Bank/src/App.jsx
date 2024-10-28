import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bank from './store/Bank'
import BankComponent from './bank_redux/BankComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Bank/> */}
     <BankComponent/>
    </>
  )
}

export default App
