import React from 'react'
/* components */
import Header from '../components/Header'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Cars from '../components/Cars'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import CarFilter from '../components/CarFilter'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <CarFilter/>
      <Hero/>
      <Category/>
      <Cars/>
      <Footer/>
    </div>
  )
}

export default Home