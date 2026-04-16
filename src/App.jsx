import React, { useState } from 'react' 
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home' 
import Timeline from './pages/Timeline'
import Stats from './pages/Stats'
import Footer from './components/footer/Footer'
import FriendDetails from './pages/FriendDetails';
import NotFound from './pages/NoFound';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [currentPage, setPage] = useState('home');
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [timeline, setTimeline] = useState([]);

  const handleCheckIn = (type, friendName) => {
      const entry = {
          id: Date.now(),
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          type: type,
          title: `${type} with ${friendName}`
      };
      setTimeline([entry, ...timeline]);
      toast.success(`Checked in: ${type} with ${friendName}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar currentPage={currentPage} setPage={setPage} />
      <main className="flex-grow container mx-auto px-4">
        {currentPage === 'home' && (
          <Home setPage={setPage} setSelectedFriend={setSelectedFriend} />
        )}
        {currentPage === 'details' && (
          <FriendDetails 
            friend={selectedFriend} 
            setPage={setPage} 
            onCheckIn={handleCheckIn} 
          />
        )}
        {currentPage === 'timeline' && (
          <Timeline entries={timeline} />
        )}
        {currentPage === 'stats' && <Stats timeline={timeline} />}
        {!['home', 'details', 'timeline', 'stats'].includes(currentPage) && (
            <NotFound setPage={setPage} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App