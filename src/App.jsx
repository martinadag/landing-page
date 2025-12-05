import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Grid from './components/grid';
import Footer from './components/footer';
import News from './components/news';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  {/* fragment per contenere più componenti */}
      <Navbar />
      <div className="main-content">
        <Grid />
        <News />
      </div>
      <Footer />
    </>
  )
}

export default App