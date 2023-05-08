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
        <Photo />
        <div className="my__card-padding">
          <Info />
          <About />
          <Button />
          <Interests />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
