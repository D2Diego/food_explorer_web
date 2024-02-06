import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyle from './styles/global'

import  { Food }   from './pages/Food'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <GlobalStyle/>
          <Food/>
    </ThemeProvider>
  </React.StrictMode>,
)
