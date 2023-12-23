import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/Theme.jsx'
import GlobalStyle from './theme/Globalstyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
