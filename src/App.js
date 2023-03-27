import React from 'react'
import Activities from './components/Activities'
import Booking from './components/Booking'
import Contact from './components/Contact'

import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Footerr from './components/Footerr'

const App = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Hero/>
        <Activities/>
        <Booking/>
        <Gallery/>
        <Contact/>
        <Footerr/>
    </div>
  )
}

export default App