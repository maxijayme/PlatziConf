import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

import "../styles/components/Layout.css";

function Layout({children}) {
  return (
    <div className='Main'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout