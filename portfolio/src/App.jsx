import { useState } from 'react'
import './App.css'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'

function App() {
  const [count, setCount] = useState(0)

  return <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/>
    <ProjectsMain/>
    <ContactMeMain/>
    <HelperSection/>
  </main>
}

export default App
