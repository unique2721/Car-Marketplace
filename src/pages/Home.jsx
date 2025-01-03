import React from 'react'
/* components */
import Header from '../components/Header'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Cars from '../components/Cars'
import CarList from '../components/CarList'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Cars/>
    </div>
  )
}

export default Home