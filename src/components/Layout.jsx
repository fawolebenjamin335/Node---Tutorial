import React from 'react'
import Navbar from './Navbar'

const Layout = ({Children}) => {
  return (
    <>
    <Navbar />
    <main>
       {Children}
    </main>
    <footer>

    </footer>
    </>
  )
}

export default Layout
