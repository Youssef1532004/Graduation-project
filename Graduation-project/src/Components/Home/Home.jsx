import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className=' p-5 p-md-4 mb-4 bg-light rounded-2'>
      <div className='container py-4 p-5'>
      <h1 className=' text-center mb-3 fw-bold'>Welcome to <span className=' text-info fw-bolder'> My store</span></h1>
      <p className=' lead  fs-5 text-muted mb-4'> Welcome to MyStore your goto shop for trendy clothing  bags and the latest fashion accessories.</p>

      <div className=' mt-4 '>
       <h3 className=' fw-bold mb-3'>Why Shop With Us?</h3>

  <ol className="list-group">

    <li className='list-group-item bg-info-subtle fw-medium  fs-5'>High quality fashion items✨</li>
    <li className='list-group-item bg-info-subtle fw-medium fs-5'> Reasonable prices✅</li>
    <li className='list-group-item bg-info-subtle fw-medium  fs-5'> Fast delivery ⚡</li>
    <li className='list-group-item  bg-info-subtle fw-medium  fs-5 '> Pay safely⭐</li>
  </ol>
  </div>
  <hr />
    <h3>See the products</h3>
    <Link to="/product" className="btn btn-outline-info text-black fs-4 btn-lg">
     View Products🛍️
    </Link>
      </div>
    </div>
  )
}
