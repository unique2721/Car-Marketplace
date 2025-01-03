import { useState } from 'react'
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom'
/* pages */
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import About from './pages/About'
import Profile from './pages/Profile'
import Services from './pages/Services'
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
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signout' element={<Signout/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
