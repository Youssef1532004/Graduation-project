import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loder from '../Loader/Loader';


export default function ProductDetails() {

let{ id} =useParams();
let[ProductD,setProductD]=useState();
async function getProuductDetails() {
  try{
    let{data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProductD(data);
  }catch {
    console.error(`something went worng while calling api....`);
    
  }
  
}
useEffect(()=>{
  getProuductDetails();
}, );
if (!ProductD) return <Loder/>;
  return (
   <div className='container mt-5'>
      <div className="row align-items-start">
       
        <div className="col-md-5">
          <img
            src={ProductD.image}
            alt={ProductD.title}
            className="img-fluid"
            style={{ objectFit: 'contain', maxHeight: '500px' }}
          />
        </div>

        
        <div className="col-md-5">
          <h2>{ProductD.title}</h2>
          <h4 className="text-primary mb-3">${ProductD.price}</h4>
          <span className="badge bg-secondary mb-3">{ProductD.category}</span>
          <p>{ProductD.description}</p>

          <button className="btn btn-outline-primary w-100 mb-2">Add to Cart</button>
          <Link to="/Product" className="btn btn-outline-info w-100">
                Back to Products
       </Link>

        </div>
      </div>
    </div>
  )
}
