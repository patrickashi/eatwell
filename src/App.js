import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import CrawfishPie from './pages/CrawfishPie'


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crawfish-pie" element={<CrawfishPie />} />
        
          </Routes>
        </main>
      </div>
    </Router>
  )
}

