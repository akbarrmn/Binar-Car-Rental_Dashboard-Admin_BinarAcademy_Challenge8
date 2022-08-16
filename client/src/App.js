import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import FilterSearched from './pages/FilterSearched';
import DetailCar from './pages/DetailCar';
import Payment from './pages/Payment';
import Payout from './pages/Payout';

import React, { createContext, useEffect } from 'react';
import {useDispatch} from "react-redux"
import {fetchData} from "./redux/actions/carsAction"
import ProtectedRoute from './auth/ProtectedRoute';
import Home from './components/admin/pages/dashboard/Home';
import CarsDashboard from './components/admin/pages/cars/CarsDashboard';
import CreateCar from './components/admin/adminComponents/create/CreateCar';
import CardCars from './components/admin/adminComponents/card/Card';
import EditCar from './components/admin/adminComponents/edit/EditCar';

export const Data = createContext()

function App() {
  const dispatch = useDispatch()
  const [user, setUser] = React.useState(null)
  const [isDashboard, setIsDashboard] = React.useState(true);
  const [isCars, setIsCars] = React.useState(false);
  const [message, setMessage] = React.useState('')

  const getUser = ()=>{
    fetch("https://chapter7backend.herokuapp.com/auth/login/success", {
      method:"GET",
      credentials:"include",
      headers:{
        Accept: "application/json"
      }
    }).then(res=>{
      if (res.status === 200) return res.json();
      throw new Error("authentication has been failed!")
    }).then(resObject=>{
      setUser(resObject.user)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getUser()
    dispatch(fetchData())
  },[])

  return (
    <>
      <BrowserRouter>
        <Data.Provider value={{ user, setUser,  isDashboard, setIsDashboard, isCars, setIsCars, message, setMessage }}>
          <Routes>
            <Route path='*' element={<><h1 className='text-center'>404 ERROR</h1></>} />
            <Route path='/login' element={user ? user.isAdmin ? <Navigate to={'/dashboard'} /> : <Navigate to={'/'} /> : <Login />} />
            <Route path='/' element={ <Landing/>} />
            <Route exact path='/dashboard' element={ <ProtectedRoute/>} >
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/dashboard/cars' element={<FilterSearched />} />
              <Route path='/dashboard/cars/detail/:id' element={<DetailCar /> } />
              <Route path='/dashboard/cars/payment/:id' element={<Payment />} />
              <Route path='/dashboard/cars/payout' element={<Payout /> } />
            </Route>
            <Route exact path='/admin' element={ <ProtectedRoute/>}>
              <Route path='/admin' element={ <Home/>} />
              <Route path='/admin/cars' element={ <CarsDashboard component={<CardCars/>}/>} />
              <Route path='/admin/add-cars' element={ <CarsDashboard component={<CreateCar/>} />} />
              <Route path='/admin/update/:id' element={ <CarsDashboard component={<EditCar/>} />} />
            </Route>
          </Routes>
        </Data.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
