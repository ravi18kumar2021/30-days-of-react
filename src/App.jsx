import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Projects />
    </>
  )
}

export default App
