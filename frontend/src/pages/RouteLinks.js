import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '..App/App'
import AboutUs from './AboutUs';
import Categories from './Categories'
import Contact from './Contact';
import Blog from './Blog';


const RouteLinks = () =>{
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<App/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </Router>
  )
}

export default  RouteLinks;