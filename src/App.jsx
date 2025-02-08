import { useState } from 'react'
//import './App.css'
import EarthCanvas from './components/Earth/Earth'
import Intro from './Segments/Intro'
import StarsCanvas from './components/Stars/Stars'
import Navbar from './components/NavBar/Navbar'

function App() {

  return (
    <div className='w-screen h-auto m-0 '>
      <Navbar />
      <Intro />
    </div>
  )
}

export default App
