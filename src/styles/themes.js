
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body, html, #root{
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
    }
`