import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import User from './User'
import Todo from './Todo'
import AddTodo from './AddTodo'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Frontend() {
  return (
      <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/User" element={<User />} />
        <Route path="/Addtodo" element={<AddTodo />} />
        <Route path='*' element={<h1>No page .Auth page not found, Error 404</h1> } />

    </Routes>
   
   <Footer />

    </>
  )
}
