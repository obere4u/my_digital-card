import About from './components/About'
import Button from './components/Button'
import Info from './components/Info'
import Interests from './components/Interests'
import Photo from './components/Photo'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="my__card">
        <div className="my__card-lg__screen">
          <div className="intro">
            <Photo />
            </div>
            <div className='my__card-info-int'>
            <Info />
            <Interests />
          </div>
        </div>
        <div>
          <About />
          <Button />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App
