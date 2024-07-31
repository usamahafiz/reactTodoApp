import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Login  from './Login'
import  Register  from './Register'
import  Forget  from './Forgot'
import Update from './Update'

export default function Auth() {
  return (
    
    <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Forgot" element={<Forget />} />
        <Route path="Update" element={<Update />} />
        <Route path='*' element={<h1>No page .Auth page not found, Error 404</h1> } />



    </Routes>
      

  )
}


