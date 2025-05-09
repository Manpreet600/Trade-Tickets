import React, { useEffect } from 'react';
import { Home, Ticket, Repeat, MessageSquare, User, Settings, LogOut } from 'lucide-react';

function Sidebar() {
    const menuItems = [
        { href: '/home', label: 'Home', icon: <Home size={18} /> },
        { href: '/myTickets', label: 'My Tickets', icon: <Ticket size={18} /> },
        { href: '/trade', label: 'Trade Tickets', icon: <Repeat size={18} /> },
        { href: '/chat', label: 'Chat', icon: <MessageSquare size={18} /> },
        { href: '/profile', label: 'Profile', icon: <User size={18} /> },
        { href: '/settings', label: 'Settings', icon: <Settings size={18} /> },
    ];

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/auth';
        }
    }
    , []);

    return (
        <div className="w-64 h-screen bg-[#10141f] text-white flex flex-col shadow-lg">
            <div className="text-2xl font-bold text-center py-5 border-b border-r border-gray-700 tracking-wide">
                Trade Tickets
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {menuItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#1c2230] transition duration-200"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-700">
                <a
                    onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/auth';
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium transition"
                >
                    <LogOut size={18} />
                    Logout
                </a>
            </div>
        </div>
    );
}

export default Sidebar;