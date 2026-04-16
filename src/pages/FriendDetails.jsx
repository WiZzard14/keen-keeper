import React from 'react';
import { useNavigate } from 'react-router-dom';

const FriendDetails = ({ friend, onCheckIn }) => {
    const navigate = useNavigate();
    
    if (!friend) return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <p className="text-gray-400">No friend selected.</p>
            <button onClick={() => navigate('/')} className="btn bg-[#2D4A41] text-white">Go Home</button>
        </div>
    );

    const getStatusStyle = (status) => {
        switch (status) {
            case 'overdue': return 'bg-red-50 text-red-600'; 
            case 'almost due': return 'bg-amber-50 text-amber-600';
            case 'on-track': return 'bg-green-50 text-green-600';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-6 bg-gray-50 min-h-screen">
            <button 
                onClick={() => navigate('/')} 
                className="mb-8 text-[#2D4A41] font-bold flex items-center gap-2 hover:underline group"
            >
                <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Back to Friends
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                <div className="lg:col-span-4 bg-white rounded-4xl p-10 shadow-sm border border-gray-100 h-fit text-center">
                    <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-gray-50" />
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{friend.name}</h1>
                    
                    <div className={`${getStatusStyle(friend.status)} px-4 py-1 rounded-full text-xs font-black uppercase inline-block mb-4`}>
                        {friend.status}
                    </div>

                    <p className="text-gray-500 italic mb-4 font-medium">"{friend.bio}"</p>
                    <p className="text-gray-400 text-sm mb-8">Preferred: {friend.email}</p>
                    
                    <div className="space-y-3 pt-6 border-t border-gray-100">
                        <button className="btn btn-outline w-full rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50">⏰ Snooze 2 Weeks</button>
                        <button className="btn btn-outline w-full rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50">📦 Archive</button>
                        <button className="btn btn-outline btn-error w-full rounded-xl">🗑️ Delete</button>
                    </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 text-center">
                            <p className="text-3xl font-black text-gray-800">{friend.days_since_contact}</p>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 text-center">
                            <p className="text-3xl font-black text-gray-800">{friend.goal}</p>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 text-center">
                            <p className="text-xl font-black text-gray-800">{friend.next_due_date}</p>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">Relationship Goal</h3>
                            <p className="text-sm text-gray-500">Connect every <span className="font-bold text-[#2D4A41]">{friend.goal} days</span></p>
                        </div>
                        <button className="btn btn-sm btn-ghost border border-gray-200 rounded-lg px-4 hover:bg-gray-50">Edit</button>
                    </div>

                    <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-50 text-center">
                        <h3 className="text-xl font-bold mb-8 text-gray-800">Quick Check-In</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <button onClick={() => onCheckIn('Call', friend.name)} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 hover:bg-green-50 hover:text-green-600 transition-all">
                                <i className="fa-solid fa-phone text-2xl"></i>
                                <span className="font-black uppercase text-xs tracking-widest">Call</span>
                            </button>
                            <button onClick={() => onCheckIn('Text', friend.name)} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-all">
                                <i className="fa-solid fa-comment-dots text-2xl"></i>
                                <span className="font-black uppercase text-xs tracking-widest">Text</span>
                            </button>
                            <button onClick={() => onCheckIn('Video', friend.name)} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 hover:bg-purple-50 hover:text-purple-600 transition-all">
                                <i className="fa-solid fa-video text-2xl"></i>
                                <span className="font-black uppercase text-xs tracking-widest">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;