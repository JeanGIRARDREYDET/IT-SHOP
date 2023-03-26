import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import BigSpinner from './components/bigSpinner/BigSpinner'
import { Routes, Route, Navigate } from "react-router-dom";
import Products from './components/products/Products'
import Login from './components/login/Login'
import Cart from './components/cart/Cart'
import Product from './components/product/Product'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import { CartProvider } from './context/CartContext'
import AdminPage from './pages/AdminPage'
import CheckOutPage from './pages/CheckOutPage'

//import path from 'path';
//import dotenv from 'dotenv';
//import { parse } from 'ts-command-line-args';

console.log(import.meta.env.VITE_API_URL);


function App() {

  return (
    <div className="App">
      
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/products" element={ <Products /> } />
            <Route path="/product/:id" element={ <Product />  } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/admin" element={ <AdminPage /> } />
            <Route path="/checkout" element={ <CheckOutPage /> } />
            <Route path="/*" element={<ErrorPage />} /> 
        </Routes>
        </Layout>
      </CartProvider>

    </div>
  )
}
export default App