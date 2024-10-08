import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Navbar from './components/Navbar'
import CatHeroPage from './components/CatHeroPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <CatHeroPage />
  </StrictMode>,
)
