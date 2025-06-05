import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                    <h2 className="text-lg font-semibold mb-2">Welcome to Excel Analytics</h2>
                    <p className="text-muted-foreground">Your data analysis dashboard</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 