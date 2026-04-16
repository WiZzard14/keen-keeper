import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

function App() {
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
    
    toast.success(`${type} with ${friendName} logged!`, {
      position: "bottom-right",
      autoClose: 3000,
      style: { backgroundColor: '#2D4A41', color: 'white' }
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
      
      <Navbar />

      <main className="grow">
        <Routes>
          <Route path="/" element={
            <Home setSelectedFriend={setSelectedFriend} timeline={timeline} />
          } />
          
          <Route path="/details" element={
            <FriendDetails friend={selectedFriend} onCheckIn={handleCheckIn} />
          } />
          
          <Route path="/timeline" element={
            <Timeline entries={timeline} />
          } />
          
          <Route path="/stats" element={
            <Stats timeline={timeline} />
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;