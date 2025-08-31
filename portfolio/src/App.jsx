import { useState } from 'react'
import './App.css'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/AboutMe/AboutMeMain'

function App() {
  const [count, setCount] = useState(0)

  return <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <SubHeroSection/>
    <AboutMeMain/>
  </main>
}

export default App
