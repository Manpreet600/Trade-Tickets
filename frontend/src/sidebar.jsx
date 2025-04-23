import React from 'react';

function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
            <h2 className="text-2xl font-bold text-center py-4 border-b border-gray-700">
                Trade Tickets
            </h2>
            <div className="flex-1">
                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="/home" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/myTickets" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            My Tickets
                        </a>
                    </li>
                    <li>
                        <a href="/trade" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            Trade Tickets
                        </a>
                    </li>
                    <li>
                        <a href="/chat" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            Chat
                        </a>
                    </li>
                    <li>
                        <a href="/profile" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/settings" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
            <div className="p-4">
                <a href="/logout" className="block px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-center">
                    Logout
                </a>
            </div>
        </div>
    );
}

export default Sidebar;