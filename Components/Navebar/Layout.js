import React, { Children } from 'react'
import Navebar from './Navebar'

const Layout = () => {
  return (
    <>
    <Navebar/>
    <div>{Children}</div>

    </>
  )
}

export default Layout