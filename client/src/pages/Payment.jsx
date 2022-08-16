import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FilterSearch from '../components/FilterSearch'
import PaymentCard from '../components/PaymentCard'
import HeaderPayment from '../components/HeaderPayment'

export default function detailCar() {
  return (
      <>
          <Navbar/>
          <HeaderPayment/>
          <FilterSearch/>
          <PaymentCard/>
          <Footer/>
      </>
  )
}
