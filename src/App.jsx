import React, { useState } from 'react' 
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home' 
import Timeline from './pages/Timeline'
import Stats from './pages/Stats'
import Footer from './components/footer/Footer'

function App() {
  const [currentPage, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar currentPage={currentPage} setPage={setPage} />

      <main className="container mx-auto px-4">
        {currentPage === 'home' && <Home />}
        {currentPage === 'timeline' && <Timeline />}
        {currentPage === 'stats' && <Stats />}
      </main>

      <Footer />

    </div>
  )
}

export default App