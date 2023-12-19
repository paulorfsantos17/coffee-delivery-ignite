import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './styles/global'
import { ThemeProvider } from 'styled-components'
import  {defaultThemes} from './styles/theme/default.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultThemes}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
