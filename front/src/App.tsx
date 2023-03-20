import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default App
