import './App.css'
import 'boxicons'
import { Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import List1 from './Components/List3/List3'
import List2 from './Components/List2/List2'
import List3 from './Components/List1/List1'
import { useSelector } from 'react-redux'
import Navbar from './Components/Navbar/navbar'

function App() {
  const { loggedIn } = useSelector(state => state.auth)
  return (
    <div className='bg-gray-100'>
      {loggedIn?<Navbar />:""}
      <Routes>
        <Route path='/' element={loggedIn?<List3/>:<Auth/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/list1' element={<List3/>} />
        <Route path='/list2' element={loggedIn?<List2/>:<Auth/>} />
        <Route path='/list3' element={loggedIn?<List1/>:<Auth/>} />
      </Routes>
    </div>
  )
}

export default App
