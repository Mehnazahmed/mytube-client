import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/router'
import { theme } from './theme'

function App() {
  

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
      
    </ThemeProvider>

    </div>
  )
}

export default App
