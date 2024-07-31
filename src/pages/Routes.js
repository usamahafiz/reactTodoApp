import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'

export default function Index() {
  return (
    <div>
        <Routes>
            <Route path="/*" element={<Frontend />} />
            <Route path='Auth/*' element={<Auth />} />
        </Routes>

      
    </div>
  )
}
