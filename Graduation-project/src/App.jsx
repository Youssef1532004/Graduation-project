
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/Notfound/NotFound'

function App() {
  
const routes= createBrowserRouter([ 
  {  path:'/',element:<Layout/> ,children:[    
 { index: true, element: <Home /> },
    {path:'/Navbar',element:<Navbar/> },
    {path:'/Home',element:<Home/> },
    {path:'/Product',element:<Product/> },
    { path: '/ProductDetails/:id', element: <ProductDetails /> },
    {path:'/*',element:<NotFound/> },


  ]}
])
  return (
    <> 

   <RouterProvider router ={routes}/>
      </>
  )
}

export default App
