import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'

const App = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default App