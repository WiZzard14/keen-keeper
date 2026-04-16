import React, { useState } from 'react';

const Timeline = ({ entries }) => {
    const [filter, setFilter] = useState('All');

    const filteredEntries = filter === 'All' 
        ? entries 
        : entries.filter(entry => entry.type === filter);

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <i className="fa-solid fa-phone text-gray-600"></i>;
            case 'Text': return <i className="fa-solid fa-comment-dots text-gray-400"></i>;
            case 'Video': return <i className="fa-solid fa-video text-gray-500"></i>;
            default: return <i className="fa-solid fa-handshake text-yellow-600"></i>;
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-6 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Timeline</h1>

            <div className="mb-8">
                <select 
                    className="select select-bordered w-full max-w-xs bg-white rounded-xl text-gray-500"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">Filter timeline (All)</option>
                    <option value="Call">Calls</option>
                    <option value="Text">Texts</option>
                    <option value="Video">Videos</option>
                </select>
            </div>

            <div className="space-y-4">
                {filteredEntries.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                        <p className="text-gray-400">No {filter !== 'All' ? filter.toLowerCase() : ''} interactions found.</p>
                    </div>
                ) : (
                    filteredEntries.map((entry) => (
                        <div 
                            key={entry.id} 
                            className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xl">
                                {getIcon(entry.type)}
                            </div>

                            <div className="flex-grow">
                                <p className="text-lg font-bold text-gray-800">
                                    <span className="text-gray-900">{entry.type}</span> 
                                    <span className="text-gray-400 font-medium"> with {entry.title.split('with ')[1]}</span>
                                </p>
                                <p className="text-sm text-gray-400 font-medium">{entry.date}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Timeline;