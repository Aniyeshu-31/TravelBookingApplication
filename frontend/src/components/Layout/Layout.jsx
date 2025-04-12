import React from 'react'

import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="page-container">
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
