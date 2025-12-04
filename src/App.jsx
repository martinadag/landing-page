import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import HeroGrid from './components/herogrid';
import Footer from './components/footer';
import News from './components/news';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="main-content">
        <HeroGrid />
        <News />
      </div>
      <Footer />
    </>
  )
}

export default App