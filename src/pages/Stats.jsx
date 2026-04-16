import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Stats = ({ timeline }) => {
    const dataCounts = timeline.reduce((acc, entry) => {
        acc[entry.type] = (acc[entry.type] || 0) + 1;
        return acc;
    }, {});

    const chartData = [
        { name: 'Text', value: dataCounts['Text'] || 0, color: '#8B5CF6' },  
        { name: 'Call', value: dataCounts['Call'] || 0, color: '#2D4A41' },  
        { name: 'Video', value: dataCounts['Video'] || 0, color: '#4ADE80' },
    ];

    const hasData = timeline.length > 0;

    const renderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <ul className="flex justify-center gap-8 mt-12">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.payload.color }} />
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">{entry.value}</span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-12 px-6">
                    Friendship Analytics
                </h1>

                <div className="bg-white rounded-[32px] p-16 shadow-sm border border-gray-100 min-h-[550px] flex flex-col">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
                        By Interaction Type
                    </h3>

                    <div className="flex-grow flex items-center justify-center">
                        {!hasData ? (
                            <p className="text-gray-400 italic font-medium">No interaction data logged yet.</p>
                        ) : (
                            <div className="w-full h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={95} 
                                            outerRadius={125}
                                            paddingAngle={8}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Legend content={renderCustomLegend} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;