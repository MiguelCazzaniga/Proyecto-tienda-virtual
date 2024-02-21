import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home, About,SingleProduct,Products, Cart, Checkout, Error, PrivateRoute } from './pages'
import AboutPage from './pages/AboutPage'

function App() {
  return(

  <Router>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:id' element={<SingleProduct/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='*' element={<Error/>}/>
   </Routes>
   <Footer></Footer>
  </Router>

  )
}

export default App
