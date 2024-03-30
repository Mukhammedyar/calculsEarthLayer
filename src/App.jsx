import './App.css'
import 'boxicons'
import { Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import { useSelector } from 'react-redux'
import Navbar from './Components/Navbar/navbar'
import List1 from './Components/List1/List1'
import List2 from './Components/List2/List2'
import List3 from './Components/List3/List3'
import Footer from './Components/Footer/footer'

function App() {
  const { loggedIn } = useSelector(state => state.auth)
  return (
    <div className='bg-gray-100'>
      {loggedIn? <Navbar />:""}
     <div className='grid place-items-center'>
      {loggedIn? <Footer />:""} 
     </div>
      <Routes>
        <Route path='/' element={loggedIn?<List1/>:<Auth/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/list1' element={loggedIn?<List1/>:<Auth/>} />
        <Route path='/list2' element={loggedIn?<List2/>:<Auth/>} />
        <Route path='/list3' element={loggedIn?<List3/>:<Auth/>} />
      </Routes>
    </div>
  )
}

export default App
