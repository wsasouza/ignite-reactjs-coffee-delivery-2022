import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ProductsProvider } from './contexts/ProductsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ProductsProvider>
          <Router />
        </ProductsProvider>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
