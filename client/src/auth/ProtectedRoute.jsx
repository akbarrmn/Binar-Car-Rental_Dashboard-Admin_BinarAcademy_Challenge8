import axios from 'axios'
import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Data } from '../App'
import Loading from './Loading'

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const { user, setUser } = React.useContext(Data)
    const [isLoading, setIsLoading] = React.useState(true);
    const getUser = async () => {
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
                    navigate('/login')
                    setIsLoading(false)
                })
              }else{
                navigate('/login')
                setIsLoading(false)
              }
        }else{
            if (user.isAdmin) {
                navigate('/admin')
                setIsLoading(false)
            }else{
                navigate('/dashboard')
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
        {isLoading ?
            <Loading/>
            :
            user ? 
            <Outlet/> 
            : 
            <Navigate to='/login'/>
            }
      </>
    )
}

export default ProtectedRoute