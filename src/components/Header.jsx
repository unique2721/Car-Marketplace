import React from 'react'
import { Link } from 'react-router-dom'
/* react icons */
import {FaSearch} from 'react-icons/fa'

const Header = () => {
  return (
    <header className=' bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className=' text-slate-500'>Bit</span>
        <span className=' text-slate-700'>Cars</span>
      </h1>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='Search...' className=' bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className=' text-slate-600'/>
      </form>
        <ul className='flex gap-4'>
          <Link to={'/'} className=' hidden sm:inline text-slate-700 hover:underline'>Home</Link>
          <Link to={'/about'} className=' hidden sm:inline text-slate-700 hover:underline'>About</Link>
          <Link to={'/services'} className=' hidden sm:inline text-slate-700 hover:underline'>Services</Link>
          <Link to={'/contact'} className=' hidden sm:inline text-slate-700 hover:underline'>Contact</Link>
          <Link to={'/signin'} className='sm:inline text-slate-700 hover:underline'>Signin</Link>
          <Link to={'/user'} className='sm:inline text-slate-700 hover:underline'>User</Link>
          <Link to={'/carListing'} className='sm:inline text-slate-700 hover:underline'>Submit lisitng</Link>
        </ul>
      </div>
    </header>
  )
}

export default Header