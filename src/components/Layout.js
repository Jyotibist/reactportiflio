import React from 'react'
import { Footer } from './Footer'
import { Topnav } from './Topnav'

export const Layout = ({children}) => {
  return (
    <div>
        <Topnav/>
        <div className='layout pt-5 mt-5'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}
