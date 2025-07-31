import React from 'react'
import { Link } from 'react-router-dom'
import loge from '../../assets/favicon.ico.jpg'
import store from '../../assets/android-chrome-192x192.png'

export default function Navbar() {
  return (
    <>
      
<nav className="navbar bg-body-tertiary  w-100   fixed-top p-1">
  <div className="container-fluid">
  <Link className="navbar-brand d-flex align-items-center gap-2 btn btn-outline-primary border-0" to={'/Home'}>
  <img  src={loge} alt="img icon"  /> <span className=' fw-bolder text-info'>MyStore</span>


</Link>
  <ul className="nav nav-tabs ">
  <li className="nav-item">
    <Link className="nav-link active form-control-lg  btn btn-outline-info" aria-current="page" to={'/Home'}>Home</Link>
  </li>
  <li className="nav-item ">
    <Link className="nav-link form-control-lg btn btn-outline-info text-black" to={'/Product'}>Prouduct</Link>
 </li>
</ul>
<img src={store} style={{ width: '150px', height: '60px' }}  alt="store logo"
  
/>
  </div>
</nav>

    </>
  )
}