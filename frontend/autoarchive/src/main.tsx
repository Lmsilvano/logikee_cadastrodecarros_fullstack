import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './GlobalStyle.tsx'
import { ThemeProvider } from 'styled-components'
import {basic } from './Theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider  theme={basic}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
