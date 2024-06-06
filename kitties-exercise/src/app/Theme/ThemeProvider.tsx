import GlobalStyle from './globalStyles'
import theme from './theme'
import React, { FC } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const ThemeProvider: FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
