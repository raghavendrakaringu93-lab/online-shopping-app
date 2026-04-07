import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './stores/context/CartContext.jsx'
import { ThemeProvider } from './stores/context/ThemeContext/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(

  <ThemeProvider>

  <CartProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </CartProvider>
     
  </ThemeProvider>
)
