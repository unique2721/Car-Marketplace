import React from 'react'
/* components */
import Header from '../components/Header'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Cars from '../components/Cars'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Category/>
      <Cars/>
    </div>
  )
}

export default Home