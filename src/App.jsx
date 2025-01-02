import { useState } from 'react'
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Sigin/>}/>
        <Route path='/signout' element={<Signout/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
        <Navbar/>
      </BrowserRouter>
    </>
  )
}

export default App
