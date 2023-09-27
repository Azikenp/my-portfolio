import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Stacks from './components/Stacks'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col bg-[#2f2f2f] min-h-[100vh] min-w-[100vw]'>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Stacks />
      <Footer />
    </div>
  )
}

export default App