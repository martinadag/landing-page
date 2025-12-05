import Navbar from './components/navbar'
import Grid from './components/grid';
import Footer from './components/footer';
import News from './components/news';

function App() {

  return (
    <>  {/* fragment per contenere più componenti */}
      <div className="container-fluid p-5 bg-primary text-white text-center">
      <Navbar />
      <div className="main-content">
        <Grid />
        <News />
      </div>
      <Footer />
      </div>
    </>
  )
}

export default App