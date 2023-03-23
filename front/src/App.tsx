import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
import { SessionProvider } from './context/SessionContext'
import ErrorBoundary from './components/errorBoundaries/ErrorBoundary'

function App() {
  // const [userCart, setUserCart] = useState({userID: '', role: '', cart: []})
  return (
    <div className="App">
      
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/products" element={ <Products />}/>
            <Route path="/product/:id" element={ <ErrorBoundary><Product /> </ErrorBoundary> } />
            <Route path="/login" element={ <LoginPage /> }/>
            <Route path="/cart" element={ <Cart /> }/>
            <Route path="/*" element={<ErrorPage />} /> 
        </Routes>
        </Layout>
      </CartProvider>

    </div>
  )
}

export default App
