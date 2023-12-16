import './App.css'
import Banner from './component/header/Banner'
import './component/header/header.css'
import Nav from './component/header/Nav'
import Adventure from './component/sections/Adventure/Adventure'

function App() {


  return (
    <>
      <div className='container'>
        <Nav />
      </div>
      <div className='headerSection'>
        <div className='container'>
          <Banner />
        </div>
      </div>
      <div className='container'>
        <Adventure/>
      </div>
    </>
  )
}

export default App
