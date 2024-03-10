import './App.css'
import 'boxicons'
import { Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth'
import List1 from './Components/List1'
import List2 from './Components/List2'
import List3 from './Components/List3'
import { useSelector } from 'react-redux'
import Navbar from './Components/navbar'

function App() {
  const { loggedIn } = useSelector(state => state.auth)
  return (
    <div className='bg-gray-100'>
      {loggedIn?<Navbar />:""}
      <Routes>
        <Route path='/' element={loggedIn?<List1/>:<Auth/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/list1' element={<List1/>} />
        <Route path='/list2' element={<List2/>} />
        <Route path='/list3' element={<List3/>} />
      </Routes>
    </div>
  )
}

export default App
