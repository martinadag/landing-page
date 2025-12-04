import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import HeroGrid from './components/herogrid';
import Footer from './components/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroGrid />
      <Footer />
    </>
  )
}

export default App