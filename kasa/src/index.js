import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/Reset.scss'
import './styles/Root.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/kasa/" element={<Home />} />
        <Route path="/kasa/accomodation/:id" element={<Accomodation />} />
        <Route path="/kasa/about" element={<About />} />
        <Route path="/kasa/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
