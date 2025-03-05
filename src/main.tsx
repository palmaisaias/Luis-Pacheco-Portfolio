// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import global Tailwind CSS styles (ensure this file exists as configured)
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)