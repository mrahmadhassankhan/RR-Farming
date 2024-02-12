import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AddtoCart from '../components/AddtoCart/AddtoCart';
import AboutUs from './About/AboutUs';
import Blog from './Blog/Blog';
import Categories from './Categories/Categories';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import CheckOut from '../components/CheckOut/CheckOut';

const MenuRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addtocart' element={<AddtoCart/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/category' element={<Categories/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </Router>
  );
};

export default MenuRoutes;
