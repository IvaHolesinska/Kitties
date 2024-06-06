import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.lightGray};
    height: 100%;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.7;
  }
`

export default GlobalStyle
