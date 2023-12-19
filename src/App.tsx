import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <h1>hello</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
