import './App.css'
import Banner from './component/header/Banner'
import './component/header/header.css'
import Nav from './component/header/Nav'
import Adventure from './component/sections/Adventure/Adventure'
import BookNow from './component/sections/bookNow/BookNow'
import Destination from './component/sections/destination/Destination'
import Discount from './component/sections/discount/Discount'

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
        <Destination/>
        <Discount/>
        <BookNow/>
      </div>
    </>
  )
}

export default App
