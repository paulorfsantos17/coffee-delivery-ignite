import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import CartProvider from './contexts/CartProvider'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
