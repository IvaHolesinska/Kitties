import Header from '../../components/Header'
import { menuItems } from '../../constants/MenuItems'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header menuItems={menuItems} />
      {children}
    </>
  )
}

export default Layout
