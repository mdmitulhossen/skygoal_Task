import './App.css'
import Banner from './component/header/Banner'
import './component/header/header.css'
import Nav from './component/header/Nav'

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
    </>
  )
}

export default App
