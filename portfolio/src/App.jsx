import { useState } from 'react'
import './App.css'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'

function App() {
  const [count, setCount] = useState(0)

  return <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
  </main>
}

export default App
