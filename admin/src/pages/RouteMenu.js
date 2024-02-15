import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from './DashBoard/DashBoard'
import AddCategory from './Category/AddCategory'
import DeleteCategory from './Category/DeleteCategory'
import UpdateCategory from './Category/UpdateCategory'
import AddProduct from './Product/AddProduct'
import DeleteProduct from './Product/DeleteProduct'
import UpdateProduct from './Product/UpdateProduct'

const RouteMenu = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/addcategory' element={<AddCategory/>}/>
            <Route path='/deletecategory' element={<DeleteCategory/>}/>
            <Route path='/updatecategory' element={<UpdateCategory/>}/>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/deleteproduct' element={<DeleteProduct/>}/>
            <Route path='/updateproduct' element={<UpdateProduct/>}/>
        </Routes>
    </Router>
  )
}

export default RouteMenu