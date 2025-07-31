import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loder from '../Loader/Loader';

export default function Product() {
 let[productArray,setProductArray]=useState([]);

const [loading, setLoading] = useState (true); 

  async function getProuduct() {
  try{
    setLoading(true); 
    const {data}= await axios.get(`https://fakestoreapi.com/products`) ;
    setProductArray(data);
    setLoading(false);
  }catch{
    console.error(`something went worng while calling api....`);
setLoading(false);
  }
  }

  useEffect(()=>{
     getProuduct()
  },[])

   if (loading) {
    return <Loder/>
    
   }
  return  (
    <>
    <h2 className="mb-4">Products</h2>

      <div className="  container py-3">
        <div className=" row row-cols-1 row-gap-md-2 row-cols-lg-3 g-4">
          {productArray.map((Product)=>
          <div className="col" key={Product.id}>

               <div className="   card h-100   shadow-sm  align-items-center justify-content-center p-3">
                    
                    <img  className=' card-img-top' 
                    style={{ height: '200px', objectFit: 'contain' }}  
                    src={Product.image} alt={Product.title} />

                     <div className="card-body d-flex flex-column justify-content-between ">

                <h5 className="card-title fs-6 flex-grow-1">{Product.title}</h5>

                <p className="card-text fw-bold">${Product.price}</p>

               <Link to={`/productDetails/${Product.id}`} className="btn btn-outline-info  mt-2 shadow  ">
                         View Details
               </Link>

              </div>
               </div>
            </div>
          )}   </div>
   </div>

    </>

  )
}
