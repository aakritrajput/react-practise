import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>    
      <Footer/>
    </>
  )
}

export default Layout

// we cannot directly use layout by importing  it but we have to specify in index file that i am using a particular layout and giving everything in it