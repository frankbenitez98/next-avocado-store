import NavBar from '@components/Navbar/Navbar'
import React, { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavBar />
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </>
  )
}

export default Layout
