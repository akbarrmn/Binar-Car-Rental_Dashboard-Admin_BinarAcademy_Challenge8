import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FilterSearch from '../components/FilterSearch'
import DetailCard from '../components/DetailCard'

export default function detailCar() {
  return (
      <>
          <Navbar/>
          <FilterSearch/>
          <DetailCard/>
          <Footer/>
      </>
  )
}
