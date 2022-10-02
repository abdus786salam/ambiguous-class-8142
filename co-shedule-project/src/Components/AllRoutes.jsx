import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DemoPage from '../Pages/DemoPage'
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage'
import MainPage from '../Pages/MainPage'
import PricingPage from '../Pages/PricingPage'
import SignUpPage from '../Pages/SignUpPage'


const AllRoutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/home' element={<MainPage />}></Route>
    <Route path='/pricing' element={<PricingPage />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/product-demo' element={<DemoPage />}></Route>
    <Route path='/signup' element={<SignUpPage />}></Route>
  </Routes>
}

export default AllRoutes