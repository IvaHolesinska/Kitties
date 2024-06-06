import AppRoutes from './AppRoutes'
import ThemeProvider from './Theme/ThemeProvider'
import React, { type FC } from 'react'

const App: FC = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
