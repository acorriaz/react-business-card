import Portrait from './assets/main-img.png'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className="wrapper">
        <img src={Portrait} alt={'Portrait'} className={'--img'} />
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App
