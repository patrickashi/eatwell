import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import CrawfishPie from './pages/CrawfishPie'
import Visionp from './pages/Visionp';
import Productsandservicesp from './pages/Productsandservicesp';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crawfish-pie" element={<CrawfishPie />} />
            <Route path="/visionp" element={<Visionp />} />
            <Route path="/productsandservices" element={<Productsandservicesp />} />
        
          </Routes>
        </main>
      </div>
    </Router>
  )
}

