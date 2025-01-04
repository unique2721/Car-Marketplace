import { useState } from 'react'
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom'
/* pages */
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Register from './pages/Register'

/* components */
import Header from './components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
