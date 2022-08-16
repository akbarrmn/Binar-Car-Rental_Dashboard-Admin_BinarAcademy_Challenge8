import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FilterSearch from '../components/FilterSearch'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  return (
        <>
          <Navbar/>
          <Hero/>
          <FilterSearch/>
          <Footer/>
        </> 
  )
}