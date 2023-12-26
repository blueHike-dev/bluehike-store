import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/Theme.jsx'
import GlobalStyle from './theme/Globalstyle.jsx'
import { Provider } from 'react-redux'
import {store} from './state/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Provider store={store} />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
