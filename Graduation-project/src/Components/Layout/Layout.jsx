import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <>
    <Navbar/>
        <div className="container pt-5">
      <Outlet/>
      </div>
    </>
  )
}
