import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import 'normalize.css'
import '../assets/css/main.css'

// import '../components/main.scss'
const Layout = ({children}) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout
