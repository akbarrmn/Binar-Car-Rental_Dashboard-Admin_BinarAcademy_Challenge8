import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Chart from '../components/Chart'
import axios from 'axios'
import { Data } from '../App'
import { Navigate, useNavigate } from 'react-router-dom'
import Loading from '../auth/Loading'

const Landing = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(true);
  const { user, setUser } = React.useContext(Data)
  const getUser =async () =>{
    if (!user){
      const token = localStorage.getItem('token');
      if (token !== null) {
        await axios.get("https://chapter7backend.herokuapp.com/auth/api/protected", {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            setUser(res.data)
            setIsLoading(false)
        }).catch(err => {
            console.log(err);
            navigate('/')
            setIsLoading(false)
        })
      }else{
        navigate('/')
        setIsLoading(false)
      }
  }else{
    if (user.isAdmin) {
        navigate('/admin')
        setIsLoading(false)
    }else{
        navigate('/')
        setIsLoading(false)
    }
  }
  }
  useEffect(() => {
      setTimeout(() => {
        getUser()
      }, 1000);
  }, [])
  return (
    <>
      {isLoading ? <Loading/>:
      <>
      <Navbar/>
      <Hero/>
      <Chart />
      <Footer/>
      </>
      }
    </>
  )
}

export default Landing