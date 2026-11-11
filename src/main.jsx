import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

// Initialise AOS once at the app level so every component's data-aos
// attributes are picked up regardless of which component mounts first.
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out',
  startEvent: 'DOMContentLoaded',
  offset: 60,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
