import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ setSelectedFriend, timeline = [] }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/friends.json')
            .then((res) => res.json())
            .then((data) => {
                setFriends(data);
                setLoading(false);
            })
            .catch(err => console.error("Error loading JSON:", err));
    }, []);

    const stats = {
        total: friends.length,
        onTrack: friends.filter(f => f.status === 'on-track').length,
        attention: friends.filter(f => f.status !== 'on-track').length,
        interactions: timeline.length 
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'overdue': return 'bg-[#ef4444] text-white'; 
            case 'almost due': return 'bg-[#fbbf24] text-white';
            case 'on-track': return 'bg-[#16a34a] text-white';
            default: return 'bg-gray-400 text-white';
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="text-center pt-16 pb-12 px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto mb-8 font-medium">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className="btn bg-[#2D4A41] hover:bg-[#1f352e] text-white border-none px-10 rounded-xl font-bold shadow-lg">
                    <span className="text-xl">＋</span> Add a Friend
                </button>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12 px-2">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <p className="text-3xl font-black text-gray-800">{stats.total}</p>
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Total</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <p className="text-3xl font-black text-gray-800">{stats.onTrack}</p>
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">On Track</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <p className="text-3xl font-black text-gray-800">{stats.attention}</p>
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Attention</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <p className="text-3xl font-black text-gray-800">{stats.interactions}</p>
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Interactions</p>
                    </div>
                </div>
            </header>

            <div className="divider mx-20"></div>

            <main className="max-w-7xl mx-auto px-6 pb-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Your Circle</h2>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <span className="loading loading-spinner loading-lg text-[#2D4A41]"></span>
                        <p className="text-gray-500 animate-pulse">Loading your circle...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {friends.map((friend) => (
                            <div 
                                key={friend.id}
                                onClick={() => {
                                    setSelectedFriend(friend);
                                    navigate('/details');
                                }}
                                className="group bg-white rounded-3xl p-8 shadow-sm border border-transparent hover:border-[#2D4A41]/20 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center relative"
                            >
                                <img 
                                    src={friend.picture} 
                                    alt={friend.name} 
                                    className="w-24 h-24 rounded-full object-cover ring-4 ring-gray-50 group-hover:ring-[#2D4A41]/10 mb-4" 
                                />
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#2D4A41] transition-colors">{friend.name}</h3>
                                <p className="text-sm text-gray-400 mb-4 font-medium">{friend.days_since_contact} days ago</p>
                                
                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {friend.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>

                                <div className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-widest mt-auto ${getStatusColor(friend.status)}`}>
                                    {friend.status}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;