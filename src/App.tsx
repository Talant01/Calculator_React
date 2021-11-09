import React from 'react'
import Calculator from './components/Calculator'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

const theme = createTheme()

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Calculator />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
