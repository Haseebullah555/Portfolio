import { useState } from 'react'
import './App.css'
import NavbarMain from './components/navbar/NavbarMain'

function App() {
  const [count, setCount] = useState(0)

  return <main className='font-body'>
    <NavbarMain/>
  </main>
}

export default App
