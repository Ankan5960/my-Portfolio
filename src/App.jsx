import { useState } from 'react'
//import './App.css'
import EarthCanvas from './components/Earth/Earth'
import Intro from './Segments/Intro'
import StarsCanvas from './components/Stars/Stars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Intro />
    </div>
  )
}

export default App
